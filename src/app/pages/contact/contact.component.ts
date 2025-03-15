import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    InputTextModule, 
    ButtonModule,
    ToastModule
  ],
  providers: [MessageService],
  template: `
    <section class="py-16 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-8 text-center dark:text-white">Contact Me</h1>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h2 class="text-2xl font-bold mb-6 dark:text-white">Get In Touch</h2>
            
            <p class="mb-8 dark:text-gray-300">
              I'm interested in freelance opportunities, full-time positions, and consulting work. 
              If you have a project that needs my expertise or just want to say hello, feel free to reach out!
            </p>
            
            <div class="space-y-6">
              <div class="flex items-center gap-4">
                <div class="bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
                  <i class="pi pi-envelope text-primary-600 dark:text-primary-300 text-xl"></i>
                </div>
                <div>
                  <h3 class="font-semibold dark:text-white">Email</h3>
                  <a href="mailto:huseyindol@gmail.com" class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                    huseyindol&#64;gmail.com
                  </a>
                </div>
              </div>
              
              <div class="flex items-center gap-4">
                <div class="bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
                  <i class="pi pi-phone text-primary-600 dark:text-primary-300 text-xl"></i>
                </div>
                <div>
                  <h3 class="font-semibold dark:text-white">Phone</h3>
                  <a href="tel:+905445582825" class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                    +90 544 558 2825
                  </a>
                </div>
              </div>
              
              <div class="flex items-center gap-4">
                <div class="bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
                  <i class="pi pi-map-marker text-primary-600 dark:text-primary-300 text-xl"></i>
                </div>
                <div>
                  <h3 class="font-semibold dark:text-white">Location</h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    Istanbul, Turkey
                  </p>
                </div>
              </div>
            </div>
            
            <div class="mt-10">
              <h3 class="text-xl font-bold mb-4 dark:text-white">Connect With Me</h3>
              
              <div class="flex gap-4">
                <a href="https://github.com/huseyindol" target="_blank" class="bg-gray-200 dark:bg-gray-700 p-3 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors">
                  <i class="pi pi-github text-gray-700 dark:text-gray-300 text-xl"></i>
                </a>
                
                <a href="https://www.linkedin.com/in/h%C3%BCseyin-dol-5827673a/" target="_blank" class="bg-gray-200 dark:bg-gray-700 p-3 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors">
                  <i class="pi pi-linkedin text-gray-700 dark:text-gray-300 text-xl"></i>
                </a>
                
                <a href="https://twitter.com/huseyindol" target="_blank" class="bg-gray-200 dark:bg-gray-700 p-3 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors">
                  <i class="pi pi-twitter text-gray-700 dark:text-gray-300 text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h2 class="text-2xl font-bold mb-6 dark:text-white">Send Me a Message</h2>
            
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
              <div class="form-group">
                <label for="name" class="block mb-2 font-medium dark:text-white">Name</label>
                <input 
                  id="name" 
                  type="text" 
                  pInputText 
                  formControlName="name" 
                  class="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  [ngClass]="{'ng-invalid ng-dirty': submitted && f['name'].errors}"
                />
                @if (submitted && f['name'].errors) {
                  <small class="text-red-500">Name is required</small>
                }
              </div>
              
              <div class="form-group">
                <label for="email" class="block mb-2 font-medium dark:text-white">Email</label>
                <input 
                  id="email" 
                  type="email" 
                  pInputText 
                  formControlName="email" 
                  class="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  [ngClass]="{'ng-invalid ng-dirty': submitted && f['email'].errors}"
                />
                @if (submitted && f['email'].errors) {
                  <small class="text-red-500">
                    @if (f['email'].errors['required']) {
                      Email is required
                    } @else if (f['email'].errors['email']) {
                      Please enter a valid email address
                    }
                  </small>
                }
              </div>
              
              <div class="form-group">
                <label for="subject" class="block mb-2 font-medium dark:text-white">Subject</label>
                <input 
                  id="subject" 
                  type="text" 
                  pInputText 
                  formControlName="subject" 
                  class="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  [ngClass]="{'ng-invalid ng-dirty': submitted && f['subject'].errors}"
                />
                @if (submitted && f['subject'].errors) {
                  <small class="text-red-500">Subject is required</small>
                }
              </div>
              
              <div class="form-group">
                <label for="message" class="block mb-2 font-medium dark:text-white">Message</label>
                <textarea 
                  id="message" 
                  formControlName="message" 
                  rows="5" 
                  class="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  [ngClass]="{'ng-invalid ng-dirty': submitted && f['message'].errors}"
                ></textarea>
                @if (submitted && f['message'].errors) {
                  <small class="text-red-500">
                    @if (f['message'].errors['required']) {
                      Message is required
                    } @else if (f['message'].errors['minlength']) {
                      Message must be at least 10 characters
                    }
                  </small>
                }
              </div>
              
              <div class="form-group">
                <button 
                  type="submit" 
                  pButton 
                  [loading]="loading"
                  label="Send Message" 
                  class="w-full p-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-colors"
                ></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    
    <p-toast></p-toast>
  `,
  styles: `
    :host {
      display: block;
    }
    
    :host ::ng-deep .p-inputtext:enabled:focus {
      box-shadow: 0 0 0 2px rgba(var(--primary-500-rgb), 0.2);
      border-color: var(--primary-500);
    }
    
    :host ::ng-deep .p-button {
      background-color: var(--primary-600);
      border-color: var(--primary-600);
    }
    
    :host ::ng-deep .p-button:hover {
      background-color: var(--primary-700);
      border-color: var(--primary-700);
    }
  `
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  loading = false;
  
  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  get f() {
    return this.contactForm.controls;
  }
  
  onSubmit() {
    this.submitted = true;
    
    if (this.contactForm.invalid) {
      return;
    }
    
    this.loading = true;
    
    // Simulate API call
    setTimeout(() => {
      this.loading = false;
      this.messageService.add({
        severity: 'success',
        summary: 'Message Sent',
        detail: 'Thank you for your message. I will get back to you soon!'
      });
      this.contactForm.reset();
      this.submitted = false;
    }, 1500);
  }
} 