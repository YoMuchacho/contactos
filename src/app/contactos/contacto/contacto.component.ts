import { Component, Input } from '@angular/core';
import { Contacto } from '@contactos/modelos/contacto';
import { ContactoService } from '@contactos/servicios/contacto.service';

@Component({
    selector: 'app-contacto',
    templateUrl: './contacto.component.html',
    styleUrls: ['./contacto.component.css']
})

export class ContactoComponent {

    @Input()
    contacto: Contacto;

    constructor(
      private contactoService: ContactoService
    ) { }

    confirmacion(contacto: Contacto): void{
      const confirmacion = confirm('¿Desea eliminar este contacto?');
      if (confirmacion === true){
        this.eliminar(contacto);
      }
    }

    eliminar(contacto: Contacto): void {
      this.contactoService.delete(contacto);
      alert('contacto eliminado');
      window.location.reload();
    }
}
