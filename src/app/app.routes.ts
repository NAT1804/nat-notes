import { Routes } from '@angular/router';
import { AuthLayoutComponent } from '@layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from '@layout/main-layout/main-layout.component';
import { authGuard } from './guards/auth.guard';
import { NotFoundComponent } from '@pages/not-found/not-found.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/auth/login',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('@pages/home/home.component').then((c) => c.HomeComponent),
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('@pages/login/login.routes').then((m) => m.loginRoutes),
  },
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: 'notfound', pathMatch: 'full' },
];
