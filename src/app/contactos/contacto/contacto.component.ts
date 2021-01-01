import { Component, Input } from '@angular/core';
import { Contacto } from '@contactos/modelos/contacto';

@Component({
    selector: 'app-contacto',
    templateUrl: './contacto.component.html'
})

export class ContactoComponent {
    @Input()
    contacto: Contacto;
}
