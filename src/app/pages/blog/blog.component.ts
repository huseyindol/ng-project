import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="py-16 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-8 text-center dark:text-white">Blog</h1>
        
        <div class="mb-12">
          <p class="text-lg text-center max-w-3xl mx-auto dark:text-gray-300">
            Thoughts, insights, and updates on web development, technology trends, and my personal journey.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (post of blogPosts; track post.id) {
            <div class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <img [src]="post.image" [alt]="post.title" class="w-full h-48 object-cover" />
              
              <div class="p-6">
                <div class="flex justify-between items-center mb-4">
                  <span class="text-sm text-gray-500 dark:text-gray-400">{{post.date}}</span>
                  <span class="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-md">{{post.category}}</span>
                </div>
                
                <h3 class="text-xl font-bold mb-2 dark:text-white">{{post.title}}</h3>
                
                <p class="text-gray-700 dark:text-gray-300 mb-4">
                  {{post.excerpt}}
                </p>
                
                <div class="flex flex-wrap gap-2 mb-4">
                  @for (tag of post.tags; track tag) {
                    <span class="text-sm text-gray-600 dark:text-gray-400">#{{tag}}</span>
                  }
                </div>
                
                <div class="flex justify-between items-center mt-6">
                  <span class="text-sm text-gray-600 dark:text-gray-400">By {{post.author}}</span>
                  <a [routerLink]="['/blog', post.id]" class="text-primary-600 hover:text-primary-800 font-medium">Read More →</a>
                </div>
              </div>
            </div>
          }
        </div>
        
        <div class="mt-12 text-center">
          <button class="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
            Load More
          </button>
        </div>
        
        <div class="mt-16 bg-gray-100 dark:bg-gray-800 rounded-lg p-8">
          <h2 class="text-2xl font-bold mb-6 text-center dark:text-white">Subscribe to My Newsletter</h2>
          
          <p class="text-center mb-8 dark:text-gray-300">
            Get the latest articles, tutorials, and updates delivered straight to your inbox.
          </p>
          
          <div class="max-w-md mx-auto">
            <div class="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                class="flex-1 p-3 rounded-l-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button class="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
              I respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export class BlogComponent {
  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Getting Started with Angular 19',
      excerpt: 'Learn how to set up your first Angular 19 project and explore the new features and improvements.',
      image: 'assets/images/blog1.jpg',
      date: 'June 15, 2024',
      author: 'Hüseyin DOL',
      category: 'Angular',
      tags: ['angular', 'webdev', 'tutorial']
    },
    {
      id: 2,
      title: 'Building Responsive UIs with Tailwind CSS',
      excerpt: 'Discover how to create beautiful, responsive user interfaces using Tailwind CSS utility classes.',
      image: 'assets/images/blog2.jpg',
      date: 'May 28, 2024',
      author: 'Hüseyin DOL',
      category: 'CSS',
      tags: ['tailwindcss', 'css', 'responsive']
    },
    {
      id: 3,
      title: 'State Management in React with Redux Toolkit',
      excerpt: 'A comprehensive guide to managing state in React applications using Redux Toolkit.',
      image: 'assets/images/blog3.jpg',
      date: 'May 10, 2024',
      author: 'Hüseyin DOL',
      category: 'React',
      tags: ['react', 'redux', 'javascript']
    },
    {
      id: 4,
      title: 'Creating RESTful APIs with Node.js and Express',
      excerpt: 'Learn how to build robust RESTful APIs using Node.js and Express for your web applications.',
      image: 'assets/images/blog4.jpg',
      date: 'April 22, 2024',
      author: 'Hüseyin DOL',
      category: 'Backend',
      tags: ['nodejs', 'express', 'api']
    },
    {
      id: 5,
      title: 'Introduction to TypeScript for JavaScript Developers',
      excerpt: 'A beginner-friendly guide to TypeScript for developers familiar with JavaScript.',
      image: 'assets/images/blog5.jpg',
      date: 'April 5, 2024',
      author: 'Hüseyin DOL',
      category: 'TypeScript',
      tags: ['typescript', 'javascript', 'webdev']
    },
    {
      id: 6,
      title: 'Deploying Angular Applications to Vercel',
      excerpt: 'Step-by-step tutorial on how to deploy your Angular applications to Vercel for free.',
      image: 'assets/images/blog6.jpg',
      date: 'March 18, 2024',
      author: 'Hüseyin DOL',
      category: 'Deployment',
      tags: ['angular', 'vercel', 'deployment']
    }
  ];
} 