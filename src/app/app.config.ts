import {
	type ApplicationConfig,
	provideZoneChangeDetection,
} from '@angular/core';
import {
	provideClientHydration,
	withEventReplay,
} from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideClientHydration(withEventReplay()),
		provideAnimationsAsync(),
		providePrimeNG({
			ripple: true,
			theme: {
				preset: Aura,
				options: {
					darkModeSelector: '.my-app-dark',
					cssLayer: {
						name: 'primeng',
						order: 'theme, base, primeng',
					},
				},
			},
		}),
	],
};
