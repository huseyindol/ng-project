import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logo = 'assets/images/logo.png'
  menu = [
    {
      id: 1,
      name: 'Home',
      link: '/'
    },
    {
      id: 2,
      name: 'About',
      link: '/about'
    },
    {
      id: 3,
      name: 'Blog',
      link: '/blog'
    }
  ]
  contact = {
    fullName: 'Hüseyin DOL',
    phone: '+905445582825',
    email: 'huseyindol@gmail.com',
    github: 'https://github.com/huseyindol',
    linkedin: 'https://www.linkedin.com/in/h%C3%BCseyin-dol-5827673a/',

  }
}
