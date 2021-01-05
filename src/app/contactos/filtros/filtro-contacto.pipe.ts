import { Pipe, PipeTransform } from '@angular/core';

import { Contacto } from '@contactos/modelos/contacto';

@Pipe({
  name: 'filtroContacto'
})
export class FiltroContactoPipe implements PipeTransform {

  transform(contacto: Contacto[], buscar: string): unknown {
    if (buscar === null){ return contacto; }

    return contacto.filter(c =>
      c.nombre.toLocaleLowerCase()
      .indexOf(buscar.toLowerCase()) !== -1);
  }

}
