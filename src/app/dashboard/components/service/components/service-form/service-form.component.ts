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
  Service,
  FetchServiceGQL,
  SearchServiceAdministratifsGQL,
  SearchSousThemesGQL,
  WebsitePage,
} from 'src/graphql/generated';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.scss'],
})
export class ServiceFormComponent implements OnChanges {
  @Input() formTitle: string;
  @Input() serviceId: string;
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
  services = [];
  liensUtils = [];
  sousThemes = [];
  faqs = [];
  filteredOptions: string[] = this.options;
  searchTerm: string = '';
  selectedOptions: string[] = [];

  serviceForm: FormGroup;
  service: Service;
  apiUrl: string = `${environment.API_URI}/service`;
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
    private fetchServiceGQL: FetchServiceGQL
  ) {
    this.getListData();
    this.serviceForm = this.fb.group({
      titre: ['', [Validators.required]],
      contenu: [''],
      sous_themes: [],
      description: [''],
      url: [''],
      service_administratifs: [],
      pages: [],
      mot_cle: [''],
      etat: ['', [Validators.required]],
      est_publie: [false],
      a_la_une: [false],
      action_button_url: [''],
      action_button_text: ['']
    });

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fetchService();
  }

  fetchService() {
    if (!this.serviceId) {
      return;
    }
    this.fetchServiceGQL
      .fetch({ serviceId: this.serviceId })
      .subscribe((result) => {
        this.service = result.data.fetchService as any;
        const serviceObject = Object.assign({}, this.service);
        this.serviceForm.patchValue(this.service);
        patchArrayValue(['service_administratifs', 'sous_themes'], this.serviceForm, serviceObject)
        this.mediaPreview = this.service.poster;
        this.mediaType = this.service.media_type as any;
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
    if (this.serviceForm.valid) {
      const formData = new FormData();
      formData.append('data', JSON.stringify({ ...this.serviceForm.value, media_type: this.mediaType }));
      formData.append('poster', this.poster);
      this.http.post(this.apiUrl, formData).subscribe(response => {
        this.snackbarService.showSuccessSnackBar(
          'Démarche ajouté avec succés'
        );
        this.router.navigate(['/dashboard/services'], { queryParams: { useCache: false } });
      }, error => {
        console.error(error);
      });
    }
  }

  update() {
    if(this.serviceForm.valid && this.serviceId) {
      const formData = new FormData();
      formData.append('data', JSON.stringify(this.serviceForm.value));
      formData.append('poster', this.poster);
      this.http.put(`${this.apiUrl}/${this.serviceId}`, formData).subscribe(response => {
        this.snackbarService.showSuccessSnackBar(
          'Démarche modifié avec succés'
        );
        this.router.navigate(['/dashboard/services'], { queryParams: { useCache: false } });
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
    this.fetchService();
    this.getServiceAdministratifs();
    this.getSousThemes();
  }

  formatSelectStringValues(values: any[]) {
    return values.map(v => (v?.nom ? v : { id: v, nom: v }));
  }
}
