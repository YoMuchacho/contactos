import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

import { Contacto } from '@contactos/modelos/contacto';
import { ContactoService } from '@contactos/servicios/contacto.service';

@Component({
  selector: 'app-contacto-actualizar',
  templateUrl: './contacto-actualizar.component.html',
  styleUrls: ['./contacto-actualizar.component.css']
})
export class ContactoActualizarComponent implements OnInit {

  contacto: Contacto;

  constructor(
    private contactoService: ContactoService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) => {
      const id = params.id;
      this.contacto = this.contactoService.buscarContacto(id);
    });
  }
}
