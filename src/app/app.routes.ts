import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home').then(m => m.HomeComponent),
    title: 'Hüseyin DOL - Portfolio'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about').then(m => m.AboutComponent),
    title: 'Hüseyin DOL - About'
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects').then(m => m.ProjectsComponent),
    title: 'Hüseyin DOL - Projects'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact').then(m => m.ContactComponent),
    title: 'Hüseyin DOL - Contact'
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog').then(m => m.BlogComponent),
    title: 'Hüseyin DOL - Blog'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
