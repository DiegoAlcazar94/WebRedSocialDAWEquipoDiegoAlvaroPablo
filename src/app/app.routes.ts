import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ComunidadComponent } from './pages/comunidad/comunidad.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ProyectoDetalleComponent } from './pages/proyecto-detalle/proyecto-detalle.component';
import { PagoComponent } from './pages/pago/pago.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'proyectos/:id', component: ProyectoDetalleComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'comunidad', component: ComunidadComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'pago', component: PagoComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];
