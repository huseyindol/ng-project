import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="py-16 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <h1 class="text-4xl font-bold mb-8 text-center dark:text-white">About Me</h1>
          
          <div class="mb-12 flex justify-center">
            <div class="w-48 h-48 rounded-full overflow-hidden border-4 border-primary-600 shadow-lg">
              <img src="assets/images/profile.jpg" alt="Hüseyin DOL" class="w-full h-full object-cover" />
            </div>
          </div>
          
          <div class="prose prose-lg max-w-none dark:prose-invert">
            <p class="mb-6">
              Hello! I'm Hüseyin DOL, a passionate Full Stack Developer with over 8 years of experience in building web applications
              and digital solutions. I specialize in creating modern, responsive, and user-friendly applications
              that solve real-world problems.
            </p>
            
            <p class="mb-6">
              My journey in software development began when I was in university, where I discovered my passion for coding
              and problem-solving. Since then, I've worked with various technologies and frameworks, constantly
              learning and adapting to the ever-evolving tech landscape.
            </p>
            
            <h2 class="text-2xl font-bold mt-10 mb-4 dark:text-white">My Approach</h2>
            
            <p class="mb-6">
              I believe in writing clean, maintainable code that follows best practices and industry standards.
              My approach to development is centered around understanding the user's needs and creating
              solutions that are not only technically sound but also provide an excellent user experience.
            </p>
            
            <p class="mb-6">
              I'm a strong advocate for continuous learning and staying updated with the latest technologies.
              This allows me to bring innovative solutions to the table and tackle complex challenges effectively.
            </p>
            
            <h2 class="text-2xl font-bold mt-10 mb-4 dark:text-white">Professional Experience</h2>
            
            <div class="mb-8">
              <h3 class="text-xl font-semibold mb-2 dark:text-white">Senior Full Stack Developer</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-2">Tech Innovations Inc. | 2020 - Present</p>
              <ul class="list-disc pl-6 mb-4 dark:text-gray-300">
                <li>Lead the development of enterprise-level web applications using Angular and Node.js</li>
                <li>Implemented microservices architecture to improve scalability and maintainability</li>
                <li>Mentored junior developers and conducted code reviews to ensure code quality</li>
                <li>Collaborated with cross-functional teams to deliver projects on time and within budget</li>
              </ul>
            </div>
            
            <div class="mb-8">
              <h3 class="text-xl font-semibold mb-2 dark:text-white">Full Stack Developer</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-2">Digital Solutions Ltd. | 2017 - 2020</p>
              <ul class="list-disc pl-6 mb-4 dark:text-gray-300">
                <li>Developed and maintained multiple client websites and web applications</li>
                <li>Created RESTful APIs and integrated third-party services</li>
                <li>Implemented responsive designs and ensured cross-browser compatibility</li>
                <li>Worked closely with designers to translate mockups into functional interfaces</li>
              </ul>
            </div>
            
            <div class="mb-8">
              <h3 class="text-xl font-semibold mb-2 dark:text-white">Frontend Developer</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-2">WebTech Solutions | 2015 - 2017</p>
              <ul class="list-disc pl-6 mb-4 dark:text-gray-300">
                <li>Built interactive user interfaces using HTML, CSS, and JavaScript</li>
                <li>Implemented responsive designs for mobile and desktop platforms</li>
                <li>Collaborated with backend developers to integrate frontend with APIs</li>
                <li>Optimized web applications for maximum speed and scalability</li>
              </ul>
            </div>
            
            <h2 class="text-2xl font-bold mt-10 mb-4 dark:text-white">Education</h2>
            
            <div class="mb-8">
              <h3 class="text-xl font-semibold mb-2 dark:text-white">Bachelor of Science in Computer Engineering</h3>
              <p class="text-gray-600 dark:text-gray-400">Istanbul Technical University | 2011 - 2015</p>
            </div>
            
            <h2 class="text-2xl font-bold mt-10 mb-4 dark:text-white">Personal Interests</h2>
            
            <p class="mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or sharing my knowledge through blog posts and tech talks. I also enjoy hiking, photography, and playing chess.
            </p>
            
            <div class="mt-10 text-center">
              <a [routerLink]="['/contact']" class="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }
    
    .prose {
      color: inherit;
    }
    
    .prose p {
      margin-bottom: 1.5rem;
    }
    
    .dark .prose {
      color: #e2e8f0;
    }
  `
})
export class AboutComponent {
  
} 