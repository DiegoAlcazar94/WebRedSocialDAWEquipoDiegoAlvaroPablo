import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './project-card.component.html'
})
export class ProjectCardComponent {
  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() tags: string[] = [];
}
