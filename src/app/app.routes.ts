import type { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./pages/home').then((m) => m.HomeComponent),
		title: 'Hüseyin DOL - Portfolio',
		data: {
			canonical: 'https://huseyindol.site',
			description:
				'Hüseyin DOL - Full Stack Developer Portfolio. Modern web uygulamaları geliştirme, Angular, React, Node.js ve cloud çözümleri konusunda uzman.',
			keywords:
				'full stack developer, web developer, angular developer, react developer, node.js developer, cloud solutions, portfolio',
		},
	},
	{
		path: 'about',
		loadComponent: () => import('./pages/about').then((m) => m.AboutComponent),
		title: 'Hüseyin DOL - About',
		data: {
			canonical: 'https://huseyindol.site/about',
			description:
				'Hüseyin DOL hakkında detaylı bilgi. 8+ yıllık deneyim, profesyonel geçmiş, eğitim ve kişisel ilgi alanları.',
			keywords:
				'hüseyin dol, full stack developer, software developer, web development, about me, professional experience',
		},
	},
	{
		path: 'projects',
		loadComponent: () =>
			import('./pages/projects').then((m) => m.ProjectsComponent),
		title: 'Hüseyin DOL - Projects',
		data: {
			canonical: 'https://huseyindol.site/projects',
			description:
				"Hüseyin DOL'un geliştirdiği projeler. E-ticaret platformları, web uygulamaları, API'ler ve daha fazlası.",
			keywords:
				'web projects, e-commerce platform, web applications, api development, portfolio projects, case studies',
		},
	},
	{
		path: 'contact',
		loadComponent: () =>
			import('./pages/contact').then((m) => m.ContactComponent),
		title: 'Hüseyin DOL - Contact',
		data: {
			canonical: 'https://huseyindol.site/contact',
			description:
				'Hüseyin DOL ile iletişime geçin. Projeleriniz için profesyonel web geliştirme hizmetleri.',
			keywords:
				'contact, hire developer, web development services, freelance developer, project inquiry',
		},
	},
	{
		path: 'blog',
		loadComponent: () => import('./pages/blog').then((m) => m.BlogComponent),
		title: 'Hüseyin DOL - Blog',
		data: {
			canonical: 'https://huseyindol.site/blog',
			description:
				'Web geliştirme, teknoloji trendleri ve kişisel deneyimler hakkında blog yazıları.',
			keywords:
				'web development blog, tech blog, programming tutorials, technology trends, development tips',
		},
	},
	{
		path: '**',
		redirectTo: '',
	},
];
