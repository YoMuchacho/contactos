import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

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
    private contactoService: ContactoService,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.consultarContactos();
  }

  consultarContactos(): void{
    this.contactos = [];
    this.route.params.pipe(take(1)).subscribe((params) => {
      const id = params.id;
      if (id >= 1){
        this.contactos = this.contactoService.consultarContantosCumplenano();
      }else{
        this.contactos = this.contactoService.gets();
      }
    });
  }
}
