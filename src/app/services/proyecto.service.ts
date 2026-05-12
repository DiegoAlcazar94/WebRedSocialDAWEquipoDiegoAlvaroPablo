import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proyecto } from '../interfaces/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private dataUrl = 'data/proyectos.json';

  constructor(private http: HttpClient) {}
}
