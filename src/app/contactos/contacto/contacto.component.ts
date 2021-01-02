import { Component, Input } from '@angular/core';
import { Contacto } from '@contactos/modelos/contacto';

@Component({
    selector: 'app-contacto',
    templateUrl: './contacto.component.html',
    styleUrls: ['./contacto.component.css']
})

export class ContactoComponent {
    @Input()
    contacto: Contacto;
}
