import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container d-flex flex-column align-items-center justify-content-center" style="min-height: 80vh;">
      <div class="text-center">
        <h1 class="display-1 fw-bold text-primary">404</h1>
        <h2 class="mb-3">Página no encontrada</h2>
        <p class="text-muted mb-4">
          Lo sentimos, la página que buscas no existe o ha sido eliminada.
        </p>
        <a routerLink="/" class="btn btn-primary btn-lg">
          <i class="bi bi-house-door me-2"></i>Volver al inicio
        </a>
      </div>
    </div>
  `
})
export class NotFoundComponent {}
