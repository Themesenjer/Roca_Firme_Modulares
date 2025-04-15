import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

import { HomeComponent } from './app/pages/home/home.component';
import { ServiciosComponent } from './app/pages/servicios/servicios.component';
import { GaleriaComponent } from './app/pages/galeria/galeria.component';
import { QuienesSomosComponent } from './app/pages/quienes-somos/quienes-somos.component';
import { ContactoComponent } from './app/pages/contacto/contacto.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'servicios', component: ServiciosComponent },
      { path: 'galeria', component: GaleriaComponent },
      { path: 'quienes-somos', component: QuienesSomosComponent },
      { path: 'contacto', component: ContactoComponent },
    ]),
  ],
});
