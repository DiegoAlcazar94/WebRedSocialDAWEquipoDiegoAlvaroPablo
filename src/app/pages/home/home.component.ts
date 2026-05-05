import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { LeaderboardComponent } from '../../components/leaderboard/leaderboard.component';
import { ProjectsService, Project } from '../../services/projects.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor, HeroComponent, ProjectCardComponent, LeaderboardComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projectsService.getProjects().subscribe(data => {
      this.projects = data.slice(0, 4);
    });
  }
}
