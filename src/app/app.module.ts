import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { ContactoRegistrarComponent } from './contactos/contacto/contacto-registrar/contacto-registrar.component';
import { ContactoActualizarComponent } from './contactos/contacto/contacto-actualizar/contacto-actualizar.component';
import { InicioComponent } from './contactos/inicio/inicio.component';
import { ContactoListaComponent } from './contactos/contacto/contacto-lista/contacto-lista.component';
import { ContactoComponent } from './contactos/contacto/contacto.component';
import { ContactoInformeComponent } from './contactos/contacto/contacto-informe/contacto-informe.component';
import { MenuComponent } from './contactos/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoRegistrarComponent,
    ContactoActualizarComponent,
    InicioComponent,
    ContactoListaComponent,
    ContactoComponent,
    ContactoInformeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
