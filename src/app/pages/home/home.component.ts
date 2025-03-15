import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonModule],
  template: `
    <section class="hero bg-gradient-to-r from-primary-800 to-primary-900 dark:from-primary-900 dark:to-primary-950 text-white py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Hüseyin DOL</h1>
            <h2 class="text-2xl md:text-3xl font-semibold mb-6">Full Stack Developer</h2>
            <p class="text-lg mb-8">
              I build modern, responsive, and scalable web applications using cutting-edge technologies.
              Specializing in Angular, React, Node.js, and cloud solutions.
            </p>
            <div class="flex flex-wrap gap-4">
              <a [routerLink]="['/projects']" class="p-button p-button-lg">
                View My Work
              </a>
              <a [routerLink]="['/contact']" class="p-button p-button-outlined p-button-lg">
                Contact Me
              </a>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img src="assets/images/profile.jpg" alt="Hüseyin DOL" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 dark:text-white">What I Do</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <div class="text-primary-600 text-4xl mb-4">
              <i class="pi pi-desktop"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 dark:text-white">Frontend Development</h3>
            <p class="dark:text-gray-300">
              Creating responsive and interactive user interfaces with Angular, React, and modern CSS frameworks.
            </p>
          </div>
          
          <div class="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <div class="text-primary-600 text-4xl mb-4">
              <i class="pi pi-server"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 dark:text-white">Backend Development</h3>
            <p class="dark:text-gray-300">
              Building robust APIs and server-side applications using Node.js, Express, and various databases.
            </p>
          </div>
          
          <div class="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <div class="text-primary-600 text-4xl mb-4">
              <i class="pi pi-cloud"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 dark:text-white">Cloud Solutions</h3>
            <p class="dark:text-gray-300">
              Deploying and managing applications on cloud platforms like AWS, Azure, and Google Cloud.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-100 dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 dark:text-white">Featured Projects</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md">
            <img src="assets/images/project1.jpg" alt="Project 1" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 dark:text-white">E-Commerce Platform</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4">
                A full-featured online shopping platform with payment integration and admin dashboard.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-2 py-1 bg-primary-100 text-primary-800 text-sm rounded-md">Angular</span>
                <span class="px-2 py-1 bg-primary-100 text-primary-800 text-sm rounded-md">Node.js</span>
                <span class="px-2 py-1 bg-primary-100 text-primary-800 text-sm rounded-md">MongoDB</span>
              </div>
              <a [routerLink]="['/projects']" class="text-primary-600 hover:text-primary-800 font-medium">View Details →</a>
            </div>
          </div>
          
          <div class="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md">
            <img src="assets/images/project2.jpg" alt="Project 2" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 dark:text-white">Task Management App</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4">
                A collaborative task management application with real-time updates and team features.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-2 py-1 bg-primary-100 text-primary-800 text-sm rounded-md">React</span>
                <span class="px-2 py-1 bg-primary-100 text-primary-800 text-sm rounded-md">Firebase</span>
                <span class="px-2 py-1 bg-primary-100 text-primary-800 text-sm rounded-md">Redux</span>
              </div>
              <a [routerLink]="['/projects']" class="text-primary-600 hover:text-primary-800 font-medium">View Details →</a>
            </div>
          </div>
          
          <div class="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md">
            <img src="assets/images/project3.jpg" alt="Project 3" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 dark:text-white">Analytics Dashboard</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4">
                A comprehensive analytics dashboard with data visualization and reporting features.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-2 py-1 bg-primary-100 text-primary-800 text-sm rounded-md">Angular</span>
                <span class="px-2 py-1 bg-primary-100 text-primary-800 text-sm rounded-md">D3.js</span>
                <span class="px-2 py-1 bg-primary-100 text-primary-800 text-sm rounded-md">Express</span>
              </div>
              <a [routerLink]="['/projects']" class="text-primary-600 hover:text-primary-800 font-medium">View Details →</a>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <a [routerLink]="['/projects']" class="p-button">
            View All Projects
          </a>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 dark:text-white">Skills & Technologies</h2>
        
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
          <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <i class="pi pi-angular text-3xl text-primary-600 mb-2"></i>
            <h3 class="font-medium dark:text-white">Angular</h3>
          </div>
          <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <i class="pi pi-react text-3xl text-primary-600 mb-2"></i>
            <h3 class="font-medium dark:text-white">React</h3>
          </div>
          <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <i class="pi pi-node text-3xl text-primary-600 mb-2"></i>
            <h3 class="font-medium dark:text-white">Node.js</h3>
          </div>
          <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <i class="pi pi-database text-3xl text-primary-600 mb-2"></i>
            <h3 class="font-medium dark:text-white">MongoDB</h3>
          </div>
          <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <i class="pi pi-cloud text-3xl text-primary-600 mb-2"></i>
            <h3 class="font-medium dark:text-white">AWS</h3>
          </div>
          <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <i class="pi pi-github text-3xl text-primary-600 mb-2"></i>
            <h3 class="font-medium dark:text-white">Git</h3>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-primary-800 dark:bg-primary-900 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Let's Work Together</h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto">
          I'm currently available for freelance projects, full-time positions, or consulting work.
          If you're interested in working together, let's get in touch!
        </p>
        <a [routerLink]="['/contact']" class="p-button p-button-lg">
          Contact Me
        </a>
      </div>
    </section>
  `,
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
  `
})
export class HomeComponent {
  
} 