import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Project {
	id: number;
	title: string;
	description: string;
	image: string;
	technologies: string[];
	demoUrl?: string;
	githubUrl?: string;
	featured: boolean;
}

@Component({
	selector: 'app-projects',
	standalone: true,
	imports: [CommonModule, RouterLink],
	template: `
    <section class="py-16 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-8 text-center dark:text-white">My Projects</h1>
        
        <div class="mb-12">
          <p class="text-lg text-center max-w-3xl mx-auto dark:text-gray-300">
            Here are some of the projects I've worked on. Each project represents a unique challenge and solution.
            Feel free to explore them and check out the code on GitHub.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (project of projects; track project.id) {
            <div class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <img [src]="project.image" [alt]="project.title" class="w-full h-48 object-cover" />
              
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2 dark:text-white">{{project.title}}</h3>
                
                <p class="text-gray-700 dark:text-gray-300 mb-4">
                  {{project.description}}
                </p>
                
                <div class="flex flex-wrap gap-2 mb-4">
                  @for (tech of project.technologies; track tech) {
                    <span class="px-2 py-1 bg-primary-100 text-primary-800 text-sm rounded-md">{{tech}}</span>
                  }
                </div>
                
                <div class="flex gap-4 mt-6">
                  @if (project.demoUrl) {
                    <a [href]="project.demoUrl" target="_blank" class="inline-flex items-center gap-1 text-primary-600 hover:text-primary-800 font-medium">
                      <i class="pi pi-external-link"></i> Live Demo
                    </a>
                  }
                  
                  @if (project.githubUrl) {
                    <a [href]="project.githubUrl" target="_blank" class="inline-flex items-center gap-1 text-primary-600 hover:text-primary-800 font-medium">
                      <i class="pi pi-github"></i> GitHub
                    </a>
                  }
                </div>
              </div>
            </div>
          }
        </div>
        
        <div class="mt-16">
          <h2 class="text-2xl font-bold mb-8 text-center dark:text-white">Client Projects</h2>
          
          <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-8">
            <p class="text-center dark:text-gray-300 mb-6">
              In addition to the projects showcased above, I've worked on numerous client projects that are protected by NDAs.
              These projects include enterprise applications, e-commerce platforms, and custom web solutions.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div class="text-primary-600 text-3xl mb-4">
                  <i class="pi pi-shopping-cart"></i>
                </div>
                <h3 class="text-lg font-semibold mb-2 dark:text-white">E-Commerce Solutions</h3>
                <p class="text-gray-700 dark:text-gray-300">
                  Custom shopping platforms with payment integration, inventory management, and analytics.
                </p>
              </div>
              
              <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div class="text-primary-600 text-3xl mb-4">
                  <i class="pi pi-chart-bar"></i>
                </div>
                <h3 class="text-lg font-semibold mb-2 dark:text-white">Business Dashboards</h3>
                <p class="text-gray-700 dark:text-gray-300">
                  Data visualization and reporting tools for businesses to track performance metrics.
                </p>
              </div>
              
              <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div class="text-primary-600 text-3xl mb-4">
                  <i class="pi pi-users"></i>
                </div>
                <h3 class="text-lg font-semibold mb-2 dark:text-white">Community Platforms</h3>
                <p class="text-gray-700 dark:text-gray-300">
                  Social networking and community management systems with real-time features.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-16 text-center">
          <h2 class="text-2xl font-bold mb-6 dark:text-white">Interested in working together?</h2>
          <p class="text-lg mb-8 max-w-2xl mx-auto dark:text-gray-300">
            I'm always open to discussing new projects and opportunities. Let's create something amazing together!
          </p>
          <a [routerLink]="['/contact']" class="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  `,
	styles: `
    :host {
      display: block;
    }
  `,
})
export class ProjectsComponent {
	projects: Project[] = [
		{
			id: 1,
			title: 'E-Commerce Platform',
			description:
				'A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.',
			image: 'assets/images/project1.jpg',
			technologies: ['Angular', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
			demoUrl: 'https://ecommerce-demo.huseyindol.site',
			githubUrl: 'https://github.com/huseyindol/ecommerce-platform',
			featured: true,
		},
		{
			id: 2,
			title: 'Task Management App',
			description:
				'A collaborative task management application with real-time updates, team features, and progress tracking.',
			image: 'assets/images/project2.jpg',
			technologies: ['React', 'Firebase', 'Redux', 'Material UI'],
			demoUrl: 'https://taskmanager.huseyindol.site',
			githubUrl: 'https://github.com/huseyindol/task-manager',
			featured: true,
		},
		{
			id: 3,
			title: 'Analytics Dashboard',
			description:
				'A comprehensive analytics dashboard with data visualization, reporting features, and customizable widgets.',
			image: 'assets/images/project3.jpg',
			technologies: ['Angular', 'D3.js', 'Express', 'PostgreSQL'],
			demoUrl: 'https://analytics.huseyindol.site',
			githubUrl: 'https://github.com/huseyindol/analytics-dashboard',
			featured: true,
		},
		{
			id: 4,
			title: 'Weather App',
			description:
				'A weather application that provides real-time weather information and forecasts for locations worldwide.',
			image: 'assets/images/project4.jpg',
			technologies: ['JavaScript', 'HTML', 'CSS', 'OpenWeather API'],
			demoUrl: 'https://weather.huseyindol.site',
			githubUrl: 'https://github.com/huseyindol/weather-app',
			featured: false,
		},
		{
			id: 5,
			title: 'Portfolio Website',
			description:
				'A modern portfolio website built with Angular and Tailwind CSS to showcase projects and skills.',
			image: 'assets/images/project5.jpg',
			technologies: ['Angular', 'Tailwind CSS', 'TypeScript'],
			githubUrl: 'https://github.com/huseyindol/portfolio',
			featured: false,
		},
		{
			id: 6,
			title: 'Recipe Finder',
			description:
				'A recipe finder application that allows users to search for recipes based on ingredients and dietary preferences.',
			image: 'assets/images/project6.jpg',
			technologies: ['React', 'Node.js', 'MongoDB', 'Spoonacular API'],
			demoUrl: 'https://recipes.huseyindol.site',
			githubUrl: 'https://github.com/huseyindol/recipe-finder',
			featured: false,
		},
	];
}
