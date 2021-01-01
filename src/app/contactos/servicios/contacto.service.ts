import { Injectable } from '@angular/core';

import { Contacto } from '@contactos/modelos/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  contactos: Contacto[];

  constructor() { }

  guardarContacto(contacto: Contacto): string {
    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem(contacto.idLocal, JSON.stringify(contacto));
      return 'Contacto guardado';
    } else {
      return 'No se puede guardar el contacto intente mas tarde...';
    }
  }

  consultarContactos(): Contacto[]{
    let contacto;
    this.contactos = [];
    for (let i = 1; i <= localStorage.length; i++) {
      contacto = JSON.parse(localStorage.getItem(String(i)));
      this.contactos.push(contacto);
    }
    return this.contactos;
  }

  totalContactos(): number{
    const total = localStorage.length;
    return total;
  }
}
