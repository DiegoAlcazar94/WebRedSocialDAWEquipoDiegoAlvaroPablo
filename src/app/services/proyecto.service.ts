import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Proyecto } from '../interfaces/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private dataUrl = 'data/proyectos.json';

  constructor(private http: HttpClient) {}

  getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.dataUrl);
  }

  getProyectoById(id: number): Observable<Proyecto | undefined> {
    return this.http.get<Proyecto[]>(this.dataUrl).pipe(
      map(proyectos => proyectos.find(p => p.id === id))
    );
  }
}
