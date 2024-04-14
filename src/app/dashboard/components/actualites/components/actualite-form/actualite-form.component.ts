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
  CreateActualiteGQL,
  Actualite,
  FetchActualiteGQL,
  SearchActualitesGQL,
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
  selector: 'app-actualite-form',
  templateUrl: './actualite-form.component.html',
  styleUrls: ['./actualite-form.component.scss'],
})
export class ActualiteFormComponent implements OnChanges {
  @Input() formTitle: string;
  @Input() actualiteId: string;
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
  actualites = [];
  liensUtils = [];
  sousThemes = [];
  faqs = [];
  filteredOptions: string[] = this.options;
  searchTerm: string = '';
  selectedOptions: string[] = [];

  actualiteForm: FormGroup;
  actualite: Actualite;
  apiUrl: string = `${environment.API_URI}/actualite`;
  poster: File;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private searchServiceAdministratifsGQL: SearchServiceAdministratifsGQL,
    private searchTextesGQL: SearchTextesGQL,
    private searchFormulairesGQL: SearchFormulairesGQL,
    private searchModeleLettresGQL: SearchModeleLettresGQL,
    private searchFaqsGQL: SearchFaqsGQL,
    private searchDemarchesGQL: SearchDemarchesGQL,
    private searchActualitesGQL: SearchActualitesGQL,
    private searchLienUtilesGQL: SearchLienUtilesGQL,
    private searchSousThemesGQL: SearchSousThemesGQL,
    private createActualiteGQL: CreateActualiteGQL,
    private snackbarService: SnackBarService,
    private router: Router,
    private fetchActualiteGQL: FetchActualiteGQL
  ) {
    this.getListData();
    this.actualiteForm = this.fb.group({
      titre: ['', [Validators.required]],
      sous_themes: [],
      description: [''],
      contenu: ['', [Validators.required]],
      url: ['', [Validators.pattern(/https?:\/\/.+/)]],
      service_administratifs: [],
      mot_cle: [''],
      observations: [''],
      etat: ['', [Validators.required]],
      est_publie: [false],
      lien_utiles: [],
      demarches: [],
      a_la_une: [false],
      textes: [],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fetchActualite();
  }

  fetchActualite() {
    if (!this.actualiteId) {
      return;
    }
    this.fetchActualiteGQL
      .fetch({ actualiteId: this.actualiteId })
      .subscribe((result) => {
        this.actualite = result.data.fetchActualite as any;
        const actualiteObject = Object.assign({}, this.actualite);
        this.actualiteForm.patchValue(this.actualite);
        patchArrayValue(['actualites', 'sous_themes', 'formulaires', 'lien_utiles', 'textes', 'service_administratifs', 'modele_lettres', 'descripteurs', 'faqs'], this.actualiteForm, actualiteObject)
        console.log({form: this.actualiteForm.value})
      });
  }

  get teleprocedure() {
    if (!this.actualiteForm) {
      return false;
    }
    return this.actualiteForm.controls['teleprocedure'].value;
  }

  onSubmit() {
    if(this.type === 'create') {
      this.create();
    } else {
      this.update();
    }
  }

  create() {
    if (this.actualiteForm.valid) {
      const formData = new FormData();
      formData.append('data', JSON.stringify(this.actualiteForm.value));
      formData.append('poster', this.poster);
      this.http.post(this.apiUrl, formData).subscribe(response => {
        this.snackbarService.showSuccessSnackBar(
          'Démarche ajouté avec succés'
        );
        this.router.navigate(['/dashboard/actualites']);
      }, error => {
        console.error(error);
      });
    }
  }

  update() {
    if(this.actualiteForm.valid && this.actualiteId) {
      const formData = new FormData();
      formData.append('data', JSON.stringify(this.actualiteForm.value));
      formData.append('poster', this.poster);
      this.http.put(`${this.apiUrl}/${this.actualiteId}`, formData).subscribe(response => {
        this.snackbarService.showSuccessSnackBar(
          'Démarche modifié avec succés'
        );
        this.router.navigate(['/dashboard/actualites']);
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
    this.fetchActualite();
    this.getServiceAdministratifs();
    this.getTextes();
    this.getSousThemes();
    this.getDemarches();
  }
}
