import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CommonModule, RouterLink, ButtonModule],
	templateUrl: './home.component.html',
	styles: `
    :host {
      display: block;
    }
    
    .p-button {
      background-color: var(--primary-600);
      border-color: var(--primary-600);
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 0.375rem;
      font-weight: 500;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
      text-decoration: none;
    }
    
    .p-button:hover {
      background-color: var(--primary-700);
      border-color: var(--primary-700);
    }
    
    .p-button-outlined {
      background-color: transparent;
      color: var(--primary-600);
    }
    
    .p-button-outlined:hover {
      background-color: var(--primary-50);
      color: var(--primary-700);
    }
    
    .p-button-lg {
      font-size: 1.125rem;
    }
  `,
})
export class HomeComponent {}
