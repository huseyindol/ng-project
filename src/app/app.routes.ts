import type { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./pages/home').then((m) => m.HomeComponent),
		title: 'Hüseyin DOL - Portfolio',
		data: { canonical: 'Hüseyin DOL - Kişisel Web Sitesi - ' },
	},
	{
		path: 'about',
		loadComponent: () => import('./pages/about').then((m) => m.AboutComponent),
		title: 'Hüseyin DOL - About',
		data: { canonical: 'Hüseyin DOL - Kişisel Web Sitesi - /about' },
	},
	{
		path: 'projects',
		loadComponent: () =>
			import('./pages/projects').then((m) => m.ProjectsComponent),
		title: 'Hüseyin DOL - Projects',
		data: { canonical: 'Hüseyin DOL - Kişisel Web Sitesi - /projects' },
	},
	{
		path: 'contact',
		loadComponent: () =>
			import('./pages/contact').then((m) => m.ContactComponent),
		title: 'Hüseyin DOL - Contact',
		data: { canonical: 'Hüseyin DOL - Kişisel Web Sitesi - /contact' },
	},
	{
		path: 'blog',
		loadComponent: () => import('./pages/blog').then((m) => m.BlogComponent),
		title: 'Hüseyin DOL - Blog',
		data: { canonical: 'Hüseyin DOL - Kişisel Web Sitesi - /blog' },
	},
	{
		path: '**',
		redirectTo: '',
	},
];
