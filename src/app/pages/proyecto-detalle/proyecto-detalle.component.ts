import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../services/projects.service';

@Component({
  selector: 'app-proyecto-detalle',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './proyecto-detalle.component.html'
})
export class ProyectoDetalleComponent implements OnInit {
  project: Project | undefined;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projectsService.getProjects().subscribe(data => {
      this.project = data.find(p => p.id === id);
    });
  }
}
