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
  CreateDemarcheGQL,
  Demarche,
  FetchDemarcheGQL,
  SearchDemarchesGQL,
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
  selector: 'app-demarche-form',
  templateUrl: './demarche-form.component.html',
  styleUrls: ['./demarche-form.component.scss'],
})
export class DemarcheFormComponent implements OnChanges {
  @Input() formTitle: string;
  @Input() demarcheId: string;
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
  demarches = [];
  liensUtils = [];
  sousThemes = [];
  faqs = [];
  filteredOptions: string[] = this.options;
  searchTerm: string = '';
  selectedOptions: string[] = [];

  demarcheForm: FormGroup;
  demarche: Demarche;
  apiUrl: string = `${environment.API_URI}/demarche`;
  demo: File;

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
    private createDemarcheGQL: CreateDemarcheGQL,
    private snackbarService: SnackBarService,
    private router: Router,
    private fetchDemarcheGQL: FetchDemarcheGQL
  ) {
    this.getListData();
    this.demarcheForm = this.fb.group({
      titre: ['', [Validators.required]],
      sous_themes: [],
      resume: ['', [Validators.required]],
      description: ['', [Validators.required]],
      corps: [''],
      post_scriptum: [''],
      url: ['', [Validators.pattern(/https?:\/\/.+/)]],
      cout: [null],
      delai: [null],
      teleprocedure: [false],
      service_administratifs: [],
      descripteurs: [],
      faqs: [],
      modele_lettres: [],
      mot_cle: [''],
      observations: [''],
      etat: ['', [Validators.required]],
      est_publie: [false],
      lien_utiles: [],
      demarches: [],
      a_la_une: [false],
      formulaires: [],
      textes: [],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fetchDemarche();
  }

  fetchDemarche() {
    if (!this.demarcheId) {
      return;
    }
    this.fetchDemarcheGQL
      .fetch({ demarcheId: this.demarcheId })
      .subscribe((result) => {
        this.demarche = result.data.fetchDemarche as any;
        const demarcheObject = Object.assign({}, this.demarche);
        this.demarcheForm.patchValue(this.demarche);
        patchArrayValue(['demarches', 'sous_themes', 'formulaires', 'lien_utiles', 'textes', 'service_administratifs', 'modele_lettres', 'descripteurs', 'faqs'], this.demarcheForm, demarcheObject)
        console.log({form: this.demarcheForm.value})
      });
  }

  get teleprocedure() {
    if (!this.demarcheForm) {
      return false;
    }
    return this.demarcheForm.controls['teleprocedure'].value;
  }

  onSubmit() {
    if(this.type === 'create') {
      this.create();
    } else {
      this.update();
    }
  }

  create() {
    if (this.demarcheForm.valid) {
      const formData = new FormData();
      formData.append('data', JSON.stringify(this.demarcheForm.value));
      formData.append('demo', this.demo);
      this.http.post(this.apiUrl, formData).subscribe(response => {
        this.snackbarService.showSuccessSnackBar(
          'Démarche ajouté avec succés'
        );
        this.router.navigate(['/dashboard/demarches']);
      }, error => {
        console.error(error);
      });
    }
  }

  update() {
    if(this.demarcheForm.valid && this.demarcheId) {
      const formData = new FormData();
      formData.append('data', JSON.stringify(this.demarcheForm.value));
      formData.append('demo', this.demo);
      this.http.put(`${this.apiUrl}/${this.demarcheId}`, formData).subscribe(response => {
        this.snackbarService.showSuccessSnackBar(
          'Démarche modifié avec succés'
        );
        this.router.navigate(['/dashboard/demarches']);
      }, error => {
        console.error(error);
      });
    }

  }

  // Handler pour les changements de attachments
  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.demo = file;
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
    this.getTextes();
    this.getFormulaires();
    this.getModeleLettres();
    this.getFaqs();
    this.getDescripteurs();
    this.getDemarches();
    this.getLiensUtils();
    this.getSousThemes();
    this.fetchDemarche();
  }
}
