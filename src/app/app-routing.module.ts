import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactoActualizarComponent } from '@contactos/contacto/contacto-actualizar/contacto-actualizar.component';
import { ContactoListaComponent } from '@contactos/contacto/contacto-lista/contacto-lista.component';
import { ContactoRegistrarComponent } from '@contactos/contacto/contacto-registrar/contacto-registrar.component';
import { InicioComponent } from '@contactos/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'registrar',
    component: ContactoRegistrarComponent
  },
  {
    path: 'actualizar/:id',
    component: ContactoActualizarComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'contactos',
    component: ContactoListaComponent
  },
  {
    path: 'contactos/:id',
    component: ContactoListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
