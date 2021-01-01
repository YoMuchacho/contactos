import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { ContactoRegistrarComponent } from './contactos/contacto/contacto-registrar/contacto-registrar.component';
import { ContactoActualizarComponent } from './contactos/contacto/contacto-actualizar/contacto-actualizar.component';
import { InicioComponent } from './contactos/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoRegistrarComponent,
    ContactoActualizarComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
