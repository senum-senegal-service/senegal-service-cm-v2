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
  CreateEdvGQL,
  Edv,
  FetchEdvGQL,
  SearchEdvsGQL,
  SearchDescripteursGQL,
  SearchFaqsGQL,
  SearchFormulairesGQL,
  SearchLienUtilesGQL,
  SearchModeleLettresGQL,
  SearchServiceAdministratifsGQL,
  SearchSousThemesGQL,
  SearchTextesGQL,
  SearchDemarchesGQL,
} from 'src/graphql/generated';

@Component({
  selector: 'app-edv-form',
  templateUrl: './edv-form.component.html',
  styleUrls: ['./edv-form.component.scss'],
})
export class EdvFormComponent implements OnChanges {
  @Input() formTitle: string;
  @Input() edvId: string;
  @Input() type: string = "create";
  content: string = '';
  editorConfig: AngularEditorConfig = EditorConfig;

  selectedValue: string;
  toggleBtnAction: boolean = false;

  states: any[] = SelectOptions.states;
  options: string[] = ['Apple'];
  servicesAdministratifs = [];
  demarches = [];
  liensUtils = [];
  sousThemes = [];
  faqs = [];
  filteredOptions: string[] = this.options;
  searchTerm: string = '';
  selectedOptions: string[] = [];

  edvForm: FormGroup;
  edv: Edv;
  apiUrl: string = `${environment.API_URI}/edv`;
  poster: File;
  icon: File;
  mediaPreview: any;
  mediaPreviewIcon: any;
  mediaType: string = 'image';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private searchServiceAdministratifsGQL: SearchServiceAdministratifsGQL,
    private searchTextesGQL: SearchTextesGQL,
    private searchFormulairesGQL: SearchFormulairesGQL,
    private searchModeleLettresGQL: SearchModeleLettresGQL,
    private searchFaqsGQL: SearchFaqsGQL,
    private searchDescripteursGQL: SearchDescripteursGQL,
    private searchDemarchesGQL: SearchDemarchesGQL,
    private searchLienUtilesGQL: SearchLienUtilesGQL,
    private searchSousThemesGQL: SearchSousThemesGQL,
    private createEdvGQL: CreateEdvGQL,
    private snackbarService: SnackBarService,
    private router: Router,
    private fetchEdvGQL: FetchEdvGQL
  ) {
    this.getListData();
    this.edvForm = this.fb.group({
      titre: ['', [Validators.required]],
      sous_themes: [],
      resume: ['', [Validators.required]],
      description: ['', [Validators.required]],
      service_administratifs: [],
      faqs: [],
      mot_cle: [''],
      observations: [''],
      etat: ['', [Validators.required]],
      est_publie: [false],
      lien_utiles: [],
      demarches: [],
      a_la_une: [false],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fetchEdv();
  }

  fetchEdv() {
    if (!this.edvId) {
      return;
    }
    this.fetchEdvGQL
      .fetch({ edvId: this.edvId }, { fetchPolicy: 'no-cache' })
      .subscribe((result) => {
        this.edv = result.data.fetchEdv as any;
        const edvObject = Object.assign({}, this.edv);
        this.edvForm.patchValue(this.edv);
        patchArrayValue(['sous_themes', 'lien_utiles', 'demarches', 'service_administratifs', 'faqs'], this.edvForm, edvObject)
        this.mediaPreview = this.edv.poster;
        this.mediaPreviewIcon = this.edv.icon;
        this.mediaType = 'image'
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
    if (this.edvForm.valid) {
      const formData = new FormData();
      formData.append('data', JSON.stringify(this.edvForm.value));
      formData.append('poster', this.poster);
      formData.append('icon', this.icon);
      this.http.post(this.apiUrl, formData).subscribe(response => {
        this.snackbarService.showSuccessSnackBar(
          'Edv ajouté avec succés'
        );
        this.router.navigate(['/dashboard/evenements-de-vie']);
      }, error => {
        console.error(error);
      });
    }
  }

  update() {
    if(this.edvForm.valid && this.edvId) {
      const formData = new FormData();
      formData.append('data', JSON.stringify(this.edvForm.value));
      formData.append('poster', this.poster);
      formData.append('icon', this.icon);
      this.http.put(`${this.apiUrl}/${this.edvId}`, formData).subscribe(response => {
        this.snackbarService.showSuccessSnackBar(
          'Edv modifié avec succés'
        );
        this.router.navigate(['/dashboard/evenements-de-vie']);
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
        // if (file.type.startsWith('image')) {
        //   this.mediaType = 'image';
        // } else if (file.type.startsWith('video')) {
        //   this.mediaType = 'video';
        //   (document.getElementById('poster') as HTMLVideoElement).volume = 0.1;
        // } else {
        //   // Gérer d'autres types de fichiers si nécessaire
        //   console.log('Type de fichier non pris en charge');
        // }
      };

      reader.readAsDataURL(file);
    }
  }

  changeIcon(event: any): void {
    const input = event.target;
    if(!input.files.length) {
      return;
    }
    const file = input.files[0];
    const maxFileSize = 50 * 1024 * 1024; // Taille maximale autorisée en octets (100 Mo)
    this.icon = file;
    if (file && file.size < maxFileSize) {
      const reader = new FileReader();

      reader.onload = () => {
        this.mediaPreviewIcon = reader.result;
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

  getFaqs() {
    this.searchFaqsGQL
      .fetch({ queryFilter: { limit: 10000 } }, { fetchPolicy: 'cache-first' })
      .subscribe((result) => {
        this.faqs = result.data.searchResults.results;
      });
  }

  getDemarches() {
    this.searchDemarchesGQL
      .fetch({ queryFilter: { limit: 10000 } }, { fetchPolicy: 'cache-first' })
      .subscribe((result) => {
        this.demarches = result.data.searchResults.results;
      });
  }

  getLiensUtils() {
    this.searchLienUtilesGQL
      .fetch({ queryFilter: { limit: 10000 } }, { fetchPolicy: 'cache-first' })
      .subscribe((result) => {
        this.liensUtils = result.data.searchResults.results;
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
    this.getServiceAdministratifs();
    this.getFaqs();
    this.getDemarches();
    this.getLiensUtils();
    this.getSousThemes();
    this.fetchEdv();
  }
}
