import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
interface Country {
	code: string;
	name: string;
}

@Component({
	selector: 'app-header',
	imports: [NgOptimizedImage, ButtonModule, CommonModule],
	templateUrl: './header.component.html',
	styleUrl: './header.component.css',
})
export class HeaderComponent {
	logo = 'assets/images/logo.png';
	menu = [
		{
			id: 1,
			name: 'Home',
			link: '/',
		},
		{
			id: 2,
			name: 'About',
			link: '/about',
		},
		{
			id: 3,
			name: 'Blog',
			link: '/blog',
		},
	];
	contact = {
		fullName: 'Hüseyin DOL',
		phone: '+905445582825',
		email: 'huseyindol@gmail.com',
		github: 'https://github.com/huseyindol',
		linkedin: 'https://www.linkedin.com/in/h%C3%BCseyin-dol-5827673a/',
	};
	countries = [
		{ code: 'US', name: 'United States' },
		{ code: 'DE', name: 'Germany' },
		{ code: 'IT', name: 'Italy' },
		{ code: 'GB', name: 'United Kingdom' },
	];
	selectedCountry: Country = { code: '', name: '' };
	isDarkMode = true;

	toggleDarkMode() {
		console.log('toggleDarkMode');
		this.isDarkMode = !this.isDarkMode;
		const element = document.querySelector('html');
		if (this.isDarkMode) {
			element?.classList.add('my-app-dark');
		} else {
			element?.classList.remove('my-app-dark');
		}
	}
}
