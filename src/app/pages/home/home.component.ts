import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { LeaderboardComponent } from '../../components/leaderboard/leaderboard.component';
import { ProyectoService } from '../../services/proyecto.service';
import { Proyecto } from '../../interfaces/proyecto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor, HeroComponent, LeaderboardComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  proyectos: Proyecto[] = [];

  constructor(private proyectoService: ProyectoService) {}

  ngOnInit() {
    this.proyectoService.getProyectos().subscribe(data => {
      this.proyectos = data.slice(0, 3);
    });
  }
}
