import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-comunidad',
  standalone: true,
  imports: [NgFor],
  templateUrl: './comunidad.component.html'
})
export class ComunidadComponent {
  miembros = [
    { nombre: 'Gold.D.Roger.js', rol: 'Fullstack Dev', xp: '9850 XP', avatar: 'https://images.icon-icons.com/1378/PNG/512/avatardefault_92824.png' },
    { nombre: 'Silver.Raileigh.C#', rol: 'Backend Dev', xp: '9250 XP', avatar: 'https://images.icon-icons.com/1378/PNG/512/avatardefault_92824.png' },
    { nombre: 'Cooper.mind.Js', rol: 'Frontend Dev', xp: '8720 XP', avatar: 'https://images.icon-icons.com/1378/PNG/512/avatardefault_92824.png' },
    { nombre: 'Diego.Alcazar', rol: 'Fullstack Dev', xp: '8500 XP', avatar: 'https://images.icon-icons.com/1378/PNG/512/avatardefault_92824.png' },
    { nombre: 'Alvaro.Dev', rol: 'Frontend Dev', xp: '7900 XP', avatar: 'https://images.icon-icons.com/1378/PNG/512/avatardefault_92824.png' },
    { nombre: 'Pablo.Code', rol: 'Backend Dev', xp: '7650 XP', avatar: 'https://images.icon-icons.com/1378/PNG/512/avatardefault_92824.png' },
  ];
}
