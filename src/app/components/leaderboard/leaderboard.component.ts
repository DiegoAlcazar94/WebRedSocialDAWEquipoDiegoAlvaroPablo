import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [NgFor],
  templateUrl: './leaderboard.component.html'
})
export class LeaderboardComponent {
  leaders = [
    { pos: '#1', name: 'Gold.D.Roger.js', xp: '9850 XP', clase: 'gold' },
    { pos: '#2', name: 'Silver.Raileigh.C#', xp: '9250 XP', clase: 'silver' },
    { pos: '#3', name: 'Cooper.mind.Js', xp: '8720 XP', clase: 'bronze' },
  ];
}
