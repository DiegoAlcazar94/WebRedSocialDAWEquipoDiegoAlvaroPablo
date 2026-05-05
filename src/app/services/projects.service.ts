import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  autor: string;
  fecha: string;
  video: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private dataUrl = 'assets/data/projects.json';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.dataUrl);
  }
}
