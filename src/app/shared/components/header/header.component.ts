import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { AuthService } from 'src/app/auth/auth.service';
import { TranslationService } from 'src/app/translation.service';
import { APP_CONTEXT } from '../../enums/app-context.enum';
import { SidebarService } from '../../services/sidebar.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  context: APP_CONTEXT = APP_CONTEXT.Default;
  AppContext = APP_CONTEXT;
  isSidebarOpened: boolean = true;

  contextSubscription: Subscription;
  headerSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private appService: AppService,
    // private translationService: TranslationService,
    private sidebarService: SidebarService,
    private keycloakService: KeycloakService,
    private router: Router
  ) {
    this.contextSubscription = this.appService.contextAsync.subscribe((ctx) => {
      this.context = ctx;
    });

    this.sidebarService.toggleSidebar(this.isSidebarOpened);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    // Se désabonner des observables pour éviter les fuites de mémoire
    this.contextSubscription.unsubscribe();
    this.headerSubscription.unsubscribe();
  }

  get isLogedIn() {
    return this.authService.isLogedIn();
  }

  get user() {
    return this.authService.getCurrentUser();
  }

  get userRole() {
    return this.user.role.toLowerCase();
  }

  logout() {
    this.keycloakService.logout().then((result) => {
      this.router.navigate(['/']);
    });
  }

  handleToggleSidebar() {
    this.isSidebarOpened = !this.isSidebarOpened;
    this.sidebarService.toggleSidebar(this.isSidebarOpened);
  }
}
