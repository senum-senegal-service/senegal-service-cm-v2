import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { SnackBarService } from 'src/app/shared/services/snackbar.service';
import { EditorConfig } from 'src/app/shared/utils/angular-editor-configuration';
import { patchArrayValue } from 'src/app/shared/utils/common.utils';
import { SelectOptions } from 'src/app/shared/utils/selec-options';
import { environment } from 'src/environments/environment';
import {
  CreateStructureGQL,
  UpdateStructureGQL,
  Structure,
  FetchStructureGQL,
  SearchModeleLettresGQL,
  SearchServiceAdministratifsGQL,
  SearchSousThemesGQL,
  WebsitePage,
} from 'src/graphql/generated';

@Component({
  selector: 'app-structure-form',
  templateUrl: './structure-form.component.html',
  styleUrls: ['./structure-form.component.scss'],
})
export class StructureFormComponent implements OnChanges {
  @Input() formTitle: string;
  @Input() structureId: string;
  @Input() type: string = "create";
  content: string = '';
  editorConfig: AngularEditorConfig = EditorConfig;

  selectedValue: string;
  toggleBtnAction: boolean = false;

  states: any[] = SelectOptions.states;
  options: string[] = ['Apple'];
  servicesAdministratifs = [];
  textes = [];
  demarches = [];
  modeleLettres = [];
  descripteurs = [];
  structures = [];
  liensUtils = [];
  sousThemes = [];
  faqs = [];
  filteredOptions: string[] = this.options;
  searchTerm: string = '';
  selectedOptions: string[] = [];

  structureForm: FormGroup;
  structure: Structure;
  apiUrl: string = `${environment.API_URI}/structure`;
  poster: File;
  mediaPreview: string | ArrayBuffer | null;
  mediaType: 'image' | 'video' | null;
  pages = Object.values(WebsitePage).map(p => ({ id: p, nom: p }));
  selectedPages = []

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private searchServiceAdministratifsGQL: SearchServiceAdministratifsGQL,
    private searchSousThemesGQL: SearchSousThemesGQL,
    private snackbarService: SnackBarService,
    private router: Router,
    private fetchStructureGQL: FetchStructureGQL,
    private createStrcutureGQL: CreateStructureGQL,
    private updateStructureGQL: UpdateStructureGQL
  ) {
    this.getListData();
    this.structureForm = this.fb.group({
      libelle: ['', [Validators.required]],
      collectivite_id: ['', [Validators.required]],
      description: ['', [Validators.required]],
      localisation: [''],
      responsable: [''],
      contact_responsable: [''],
      zone: ['', [Validators.required]],
      latitude: ['', [Validators.required]],
      longitude: ['', [Validators.required]],
      map: [''],
    });

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fetchStructure();
  }

  fetchStructure() {
    if (!this.structureId) {
      return;
    }
    this.fetchStructureGQL
      .fetch({ structureId: this.structureId })
      .subscribe((result) => {
        this.structure = result.data.fetchStructure as any;
        this.structureForm.patchValue(this.structure);
      });
  }

  onSubmit() {
    if(this.type === 'create') {
      this.create();
    } else {
      this.update();
    }
  }

  create() {
    if (this.structureForm.valid) {
      this.createStrcutureGQL.mutate({ structureInput: this.structureForm.value }).subscribe(response => {
        this.snackbarService.showSuccessSnackBar(
          'Structure ajouté avec succés'
        );
        this.router.navigate(['/dashboard/structures']);
      }, error => {
        console.error(error);
      });
    }
  }

  update() {
    if(this.structureForm.valid && this.structureId) {
      this.updateStructureGQL.mutate({ structureId: this.structureId, structureInput: this.structureForm.value }).subscribe(response => {
        this.snackbarService.showSuccessSnackBar(
          'Structure modifié avec succés'
        );
        this.router.navigate(['/dashboard/structures']);
      }, error => {
        console.error(error);
      });
    }

  }

  // Handler pour les changements de attachments
  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.poster = file;
    }
  }

  changePoster(event: any): void {
    const input = event.target;
    if(!input.files.length) {
      return;
    }
    const file = input.files[0];
    const maxFileSize = 50 * 1024 * 1024; // Taille maximale autorisée en octets (100 Mo)
    this.poster = file;
    if (file && file.size < maxFileSize) {
      const reader = new FileReader();

      reader.onload = () => {
        this.mediaPreview = reader.result;
        // Vérifier le type du fichier
        if (file.type.startsWith('image')) {
          this.mediaType = 'image';
        } else if (file.type.startsWith('video')) {
          this.mediaType = 'video';
          (document.getElementById('poster') as HTMLVideoElement).volume = 0.1;
        } else {
          // Gérer d'autres types de fichiers si nécessaire
          console.log('Type de fichier non pris en charge');
        }
      };

      reader.readAsDataURL(file);
    }
  }

  // Méthode pour filtrer les options en fonction du terme de recherche
  filterOptions(): void {
    const searchTerm = this.searchTerm.toLowerCase();
    this.filteredOptions = this.options.filter((option) =>
      option.toLowerCase().includes(searchTerm)
    );
  }

  //Méthode pour ajouter une option
  selectOption(option: string) {
    this.searchTerm = '';
    this.filteredOptions = this.options;

    const index = this.selectedOptions.indexOf(option);
    if (index !== -1) {
      this.selectedOptions.splice(index, 1);
    } else {
      this.selectedOptions.push(option);
    }
  }

  isAllreadySelected(opt: string) {
    const index = this.selectedOptions.indexOf(opt);
    if (index !== -1) {
      return true;
    } else {
      return false;
    }
  }

  removeOption(str: string) {
    this.selectedOptions = this.selectedOptions.filter((item) => item !== str);
  }

  getServiceAdministratifs() {
    this.searchServiceAdministratifsGQL
      .fetch({ queryFilter: { limit: 10000 } }, { fetchPolicy: 'cache-first' })
      .subscribe((result) => {
        this.servicesAdministratifs = result.data.searchResults.results;
      });
  }

  getSousThemes() {
    this.searchSousThemesGQL
      .fetch({ queryFilter: { limit: 10000 } }, { fetchPolicy: 'cache-first' })
      .subscribe((result) => {
        this.sousThemes = result.data.searchResults.results;
      });
  }

  getListData() {
    this.fetchStructure();
    this.getServiceAdministratifs();
    this.getSousThemes();
  }

  formatSelectStringValues(values: any[]) {
    return values.map(v => (v?.nom ? v : { id: v, nom: v }));
  }
}
