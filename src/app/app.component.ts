import { isPlatformBrowser } from '@angular/common';
import { Component, type OnInit, PLATFORM_ID, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, HeaderComponent, FooterComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
	private router = inject(Router);
	private metaService = inject(Meta);
	private platformId = inject(PLATFORM_ID);

	ngOnInit(): void {
		this.router.events
			.pipe(
				filter((event) => event instanceof NavigationEnd),
				map(() => this.router.routerState.snapshot.root),
				map((route) => {
					let currentRoute = route;
					while (currentRoute.firstChild)
						currentRoute = currentRoute.firstChild;
					return currentRoute;
				}),
			)
			.subscribe((route) => {
				const data = route.data as {
					canonical?: string;
					description?: string;
					keywords?: string;
				};

				if (data['description']) {
					this.metaService.updateTag({
						name: 'description',
						content: data['description'],
					});
				}

				if (data['keywords']) {
					this.metaService.updateTag({
						name: 'keywords',
						content: data['keywords'],
					});
				}

				if (data['canonical'] && isPlatformBrowser(this.platformId)) {
					this.updateCanonicalUrl(data['canonical']);
				}
			});
	}

	private updateCanonicalUrl(url: string) {
		console.log('updateCanonicalUrl', url);
		// Remove existing canonical link if any
		const existingLink = document.querySelector('link[rel="canonical"]');
		if (existingLink) {
			existingLink.remove();
		}

		// Add new canonical link
		const link = document.createElement('link');
		link.rel = 'canonical';
		link.href = url;
		document.head.appendChild(link);
	}
}
