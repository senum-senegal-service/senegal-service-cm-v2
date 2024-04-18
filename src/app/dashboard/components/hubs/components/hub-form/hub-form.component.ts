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
  CreateHubGQL,
  Hub,
  FetchHubGQL,
  SearchHubsGQL,
  SearchDescripteursGQL,
  SearchFaqsGQL,
  SearchFormulairesGQL,
  SearchLienUtilesGQL,
  SearchModeleLettresGQL,
  SearchServiceAdministratifsGQL,
  SearchSousThemesGQL,
  SearchTextesGQL,
} from 'src/graphql/generated';

@Component({
  selector: 'app-hub-form',
  templateUrl: './hub-form.component.html',
  styleUrls: ['./hub-form.component.scss'],
})
export class HubFormComponent implements OnChanges {
  @Input() formTitle: string;
  @Input() hubId: string;
  @Input() type: string = "create";
  content: string = '';
  editorConfig: AngularEditorConfig = EditorConfig;

  selectedValue: string;
  toggleBtnAction: boolean = false;

  states: any[] = SelectOptions.states;
  options: string[] = ['Apple'];
  servicesAdministratifs = [];
  textes = [];
  formulaires = [];
  modeleLettres = [];
  descripteurs = [];
  hubs = [];
  liensUtils = [];
  sousThemes = [];
  faqs = [];
  filteredOptions: string[] = this.options;
  searchTerm: string = '';
  selectedOptions: string[] = [];

  hubForm: FormGroup;
  hub: Hub;
  apiUrl: string = `${environment.API_URI}/hub`;
  poster: File;
  mediaPreview: any;
  mediaType: string;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private searchServiceAdministratifsGQL: SearchServiceAdministratifsGQL,
    private searchTextesGQL: SearchTextesGQL,
    private searchFormulairesGQL: SearchFormulairesGQL,
    private searchModeleLettresGQL: SearchModeleLettresGQL,
    private searchFaqsGQL: SearchFaqsGQL,
    private searchDescripteursGQL: SearchDescripteursGQL,
    private searchHubsGQL: SearchHubsGQL,
    private searchLienUtilesGQL: SearchLienUtilesGQL,
    private searchSousThemesGQL: SearchSousThemesGQL,
    private createHubGQL: CreateHubGQL,
    private snackbarService: SnackBarService,
    private router: Router,
    private fetchHubGQL: FetchHubGQL
  ) {
    this.getListData();
    this.hubForm = this.fb.group({
      titre: ['', [Validators.required]],
      sous_themes: [],
      resume: ['', [Validators.required]],
      description: ['', [Validators.required]],
      service_administratifs: [],
      descripteurs: [],
      faqs: [],
      modele_lettres: [],
      mot_cle: [''],
      observations: [''],
      etat: ['', [Validators.required]],
      est_publie: [false],
      lien_utiles: [],
      hubs: [],
      a_la_une: [false],
      textes: [],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fetchHub();
  }

  fetchHub() {
    if (!this.hubId) {
      return;
    }
    this.fetchHubGQL
      .fetch({ hubId: this.hubId }, { fetchPolicy: 'no-cache' })
      .subscribe((result) => {
        this.hub = result.data.fetchHub as any;
        const hubObject = Object.assign({}, this.hub);
        this.hubForm.patchValue(this.hub);
        patchArrayValue(['sous_themes', 'lien_utiles', 'textes', 'service_administratifs', 'modele_lettres', 'descripteurs', 'faqs'], this.hubForm, hubObject)
        this.mediaPreview = this.hub.poster;
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
    if (this.hubForm.valid) {
      const formData = new FormData();
      formData.append('data', JSON.stringify(this.hubForm.value));
      formData.append('poster', this.poster);
      this.http.post(this.apiUrl, formData).subscribe(response => {
        this.snackbarService.showSuccessSnackBar(
          'Hub ajouté avec succés'
        );
        this.router.navigate(['/dashboard/hubs-de-vie']);
      }, error => {
        console.error(error);
      });
    }
  }

  update() {
    if(this.hubForm.valid && this.hubId) {
      const formData = new FormData();
      formData.append('data', JSON.stringify(this.hubForm.value));
      formData.append('poster', this.poster);
      this.http.put(`${this.apiUrl}/${this.hubId}`, formData).subscribe(response => {
        this.snackbarService.showSuccessSnackBar(
          'Hub modifié avec succés'
        );
        this.router.navigate(['/dashboard/hubs-de-vie']);
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

  getTextes() {
    this.searchTextesGQL
      .fetch({ queryFilter: { limit: 10000 } }, { fetchPolicy: 'cache-first' })
      .subscribe((result) => {
        this.textes = result.data.searchResults.results;
      });
  }

  getFormulaires() {
    this.searchFormulairesGQL
      .fetch({ queryFilter: { limit: 10000 } }, { fetchPolicy: 'cache-first' })
      .subscribe((result) => {
        this.formulaires = result.data.searchResults.results;
      });
  }

  getModeleLettres() {
    this.searchModeleLettresGQL
      .fetch({ queryFilter: { limit: 10000 } }, { fetchPolicy: 'cache-first' })
      .subscribe((result) => {
        this.modeleLettres = result.data.searchResults.results;
      });
  }

  getFaqs() {
    this.searchFaqsGQL
      .fetch({ queryFilter: { limit: 10000 } }, { fetchPolicy: 'cache-first' })
      .subscribe((result) => {
        this.faqs = result.data.searchResults.results;
      });
  }

  getDescripteurs() {
    this.searchDescripteursGQL
      .fetch({ queryFilter: { limit: 10000 } }, { fetchPolicy: 'cache-first' })
      .subscribe((result) => {
        this.descripteurs = result.data.searchResults.results;
      });
  }

  getHubs() {
    this.searchHubsGQL
      .fetch({ queryFilter: { limit: 10000 } }, { fetchPolicy: 'cache-first' })
      .subscribe((result) => {
        this.hubs = result.data.searchResults.results;
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
    this.getTextes();
    this.getFormulaires();
    this.getModeleLettres();
    this.getFaqs();
    this.getDescripteurs();
    this.getHubs();
    this.getLiensUtils();
    this.getSousThemes();
    this.fetchHub();
  }
}
