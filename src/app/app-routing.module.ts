import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full' ,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: '**',
    redirectTo: '/no-found'
  }
];

export const AppRoutingModule = RouterModule.forRoot(
  appRoutes,
  {enableTracing: false, useHash: true}
);
