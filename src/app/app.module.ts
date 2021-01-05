import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

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
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';

import { ContactoRegistrarComponent } from './contactos/contacto/contacto-registrar/contacto-registrar.component';
import { ContactoActualizarComponent } from './contactos/contacto/contacto-actualizar/contacto-actualizar.component';
import { InicioComponent } from './contactos/inicio/inicio.component';
import { ContactoListaComponent } from './contactos/contacto/contacto-lista/contacto-lista.component';
import { ContactoComponent } from './contactos/contacto/contacto.component';
import { ContactoInformeComponent } from './contactos/contacto/contacto-informe/contacto-informe.component';
import { MenuComponent } from './contactos/menu/menu.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FiltroContactoPipe } from './contactos/filtros/filtro-contacto.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactoRegistrarComponent,
    ContactoActualizarComponent,
    InicioComponent,
    ContactoListaComponent,
    ContactoComponent,
    ContactoInformeComponent,
    MenuComponent,
    FiltroContactoPipe
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
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatListModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
