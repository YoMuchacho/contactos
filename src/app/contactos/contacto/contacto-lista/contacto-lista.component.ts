import { Component, OnInit } from '@angular/core';

import { ContactoService } from '@contactos/servicios/contacto.service';
import { Contacto } from '@contactos/modelos/contacto';

@Component({
  selector: 'app-contacto-lista',
  templateUrl: './contacto-lista.component.html',
  styleUrls: ['./contacto-lista.component.css']
})
export class ContactoListaComponent implements OnInit {

  contactos: Contacto[] = [];

  constructor(
    private contactoService: ContactoService
  ) { }

  ngOnInit(): void {
    this.consultarContactos();
  }

  consultarContactos(): void{
    this.contactos = this.contactoService.consultarContactos();
  }
}
