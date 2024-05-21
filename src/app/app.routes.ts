import { Routes } from '@angular/router';
import { TabsPage } from "./tabs/tabs.page";
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: TabsPage,
    children: [
      {
        path: 'record',
        loadComponent: () => import('./tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'statistics',
        loadComponent: () => import('./tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: '',
        redirectTo: '/record',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
]