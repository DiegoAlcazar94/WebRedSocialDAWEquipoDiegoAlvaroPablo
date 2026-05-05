import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pago',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './pago.component.html'
})
export class PagoComponent {
  metodoPago: string = 'tarjeta';

  seleccionarMetodo(metodo: string) {
    this.metodoPago = metodo;
  }
}
