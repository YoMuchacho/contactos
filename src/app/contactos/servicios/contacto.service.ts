import { Injectable } from '@angular/core';

import { Contacto } from '@contactos/modelos/contacto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  contactos: Contacto[];
  contactosCumplen: Contacto[] = [];

  constructor() { }

  post(contacto: Contacto): Contacto{
    this.contactos = [];
    if (this.gets().length > 0){
      this.contactos = this.gets();
    }
    this.contactos.push(contacto);
    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem('datos', JSON.stringify(this.contactos));
    }
    return contacto;
  }

  gets(): Contacto[]{
    let contactos: Contacto[];
    contactos = JSON.parse(localStorage.getItem('datos') || '{}');
    if (contactos.length > 0){
      return contactos;
    }
    return contactos = [];
  }

  put(contacto: Contacto): Contacto{
    let contactos: Contacto[] = [];
    this.contactos = this.gets();
    contactos = this.contactos.map( item => {
      if (contacto.identificacion === item.identificacion){
        item = contacto;
      }
      return item;
    });
    localStorage.setItem('datos', JSON.stringify(contactos));
    return contacto;
  }

  delete(contacto: Contacto): void{
    let posicion: number;
    this.contactos = this.gets();
    posicion = this.contactos.findIndex(item => item.identificacion === contacto.identificacion);
    if (posicion !== -1){
      this.contactos.splice(posicion, 1);
      localStorage.setItem('datos', JSON.stringify(this.contactos));
    }
  }

  totalContactos(): number{
    if (this.gets().length > 0){
      return this.gets().length;
    }
    return 0;
  }

  buscarContacto(id: string): Contacto{
    let contacto;
    this.contactos = this.gets();
    contacto = this.contactos.find(item => item.identificacion === id);
    return contacto;
  }

  totalCumpleanos(): number{
    let total = 0;
    this.contactosCumplen = [];
    this.contactos = [];
    this.contactos = this.gets();

    if (this.contactos.length > 0){
      this.contactos.forEach(item =>
        total = total + this.val(item)
      );
    }

    return total;
  }

  val(contacto: Contacto): number{
    if (contacto){
      const f = contacto.fecha.toString();
      const fecha = Date.parse(f);
      const fechaCumpleano = new Date();
      const fechaActual = new Date();

      fechaCumpleano.setTime(fecha);

      if (fechaCumpleano.getDay() === fechaActual.getDay() && fechaCumpleano.getMonth() === fechaActual.getMonth()){
        this.contactosCumplen.push(contacto);
        return 1;
      }else{
        return 0;
      }
    }else{
      return 0;
    }
  }

  consultarContantosCumplenano(): Contacto[]{
    this.totalCumpleanos();
    return this.contactosCumplen;
  }
}
