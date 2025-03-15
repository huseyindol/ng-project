import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, HeaderComponent, FooterComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	title = 'portfolio';
	ngOnInit() {
		injectSpeedInsights();
		inject();
	}
}
