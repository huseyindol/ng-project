import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-footer',
	imports: [CommonModule, RouterLink],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.css',
})
export class FooterComponent {
	currentYear = new Date().getFullYear();
	socialLinks = [
		{
			name: 'GitHub',
			url: 'https://github.com/huseyindol',
			icon: 'pi-github'
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/h%C3%BCseyin-dol-5827673a/',
			icon: 'pi-linkedin'
		},
		{
			name: 'Twitter',
			url: 'https://twitter.com/huseyindol',
			icon: 'pi-twitter'
		}
	];
	quickLinks = [
		{
			name: 'Home',
			url: '/'
		},
		{
			name: 'About',
			url: '/about'
		},
		{
			name: 'Projects',
			url: '/projects'
		},
		{
			name: 'Blog',
			url: '/blog'
		},
		{
			name: 'Contact',
			url: '/contact'
		}
	];
}
