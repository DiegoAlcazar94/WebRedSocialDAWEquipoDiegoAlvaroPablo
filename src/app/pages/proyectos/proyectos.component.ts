import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { ProjectsService, Project } from '../../services/projects.service';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [NgFor, RouterLink, ProjectCardComponent],
  templateUrl: './proyectos.component.html'
})
export class ProyectosComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  filtroActivo: string = 'All';

  filtros = ['All', 'Frontend', 'Backend', 'Fullstack', 'Mobile', 'GameDev'];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projectsService.getProjects().subscribe(data => {
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
        p.tags.some(tag => tag.toLowerCase().includes(filtro.toLowerCase()))
      );
    }
  }
}
