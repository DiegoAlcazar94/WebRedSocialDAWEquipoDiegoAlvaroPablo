import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { ProyectoService } from '../../services/proyecto.service';
import { Proyecto } from '../../interfaces/proyecto';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, ProjectCardComponent],
  templateUrl: './proyectos.component.html'
})
export class ProyectosComponent implements OnInit {
  projects: Proyecto[] = [];
  filteredProjects: Proyecto[] = [];
  filtroActivo: string = 'All';

  filtros = ['All', 'DAW', 'DAM'];

  constructor(private proyectoService: ProyectoService) {}

  ngOnInit() {
    this.proyectoService.getProyectos().subscribe(data => {
      this.projects = data;
      this.filteredProjects = data;
    });
  }

  filtrar(filtro: string) {
    this.filtroActivo = filtro;
    if (filtro === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(p =>
        p.categoria.toLowerCase() === filtro.toLowerCase()
      );
    }
  }
}
