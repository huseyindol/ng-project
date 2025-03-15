import { Component, type OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { inject as injectAnalytics } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { filter } from 'rxjs/operators';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, HeaderComponent, FooterComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
	title = 'portfolio';
	private router = inject(Router);

	ngOnInit() {
		injectSpeedInsights();
		injectAnalytics();

		// Update canonical URL on route changes
		this.router.events
			.pipe(filter((event) => event instanceof NavigationEnd))
			.subscribe(() => {
				const route = this.router.routerState.snapshot.root;
				const canonicalUrl = route.data['canonical'];

				if (canonicalUrl) {
					// Remove existing canonical link if any
					const existingLink = document.querySelector('link[rel="canonical"]');
					if (existingLink) {
						existingLink.remove();
					}

					// Add new canonical link
					const link = document.createElement('link');
					link.rel = 'canonical';
					link.href = canonicalUrl;
					document.head.appendChild(link);
				}
			});
	}
}
