import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  equipo = [
    {
      nombre: 'Diego Alcazar',
      rol: 'Fullstack Developer',
      descripcion: 'Especialista en Angular y Node.js. Líder del equipo de desarrollo.',
      avatar: 'https://images.icon-icons.com/1378/PNG/512/avatardefault_92824.png'
    },
    {
      nombre: 'Álvaro',
      rol: 'Frontend Developer',
      descripcion: 'Experto en diseño UI/UX, Bootstrap y animaciones CSS avanzadas.',
      avatar: 'https://images.icon-icons.com/1378/PNG/512/avatardefault_92824.png'
    },
    {
      nombre: 'Pablo',
      rol: 'Backend Developer',
      descripcion: 'Especialista en bases de datos, APIs REST y arquitectura de servidores.',
      avatar: 'https://images.icon-icons.com/1378/PNG/512/avatardefault_92824.png'
    }
  ];

  tecnologias = [
    { nombre: 'Angular', icono: 'code' },
    { nombre: 'Bootstrap 5', icono: 'palette' },
    { nombre: 'TypeScript', icono: 'terminal' },
    { nombre: 'Node.js', icono: 'dns' },
    { nombre: 'HTML5', icono: 'html' },
    { nombre: 'CSS3', icono: 'css' }
  ];
}
