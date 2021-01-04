import { Component, OnInit } from '@angular/core';

import { ContactoService } from '@contactos/servicios/contacto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  totalContactos: number;
  totalCumpleanos: number;

  constructor(
    private contactoService: ContactoService
  ) { }

  ngOnInit(): void {
    this.consultarTotalContactos();
    this.consultarTotalcumpleanos();

  }

  consultarTotalContactos(): void{
    this.totalContactos = this.contactoService.totalContactos();
  }

  consultarTotalcumpleanos(): void{
    this.totalCumpleanos = this.contactoService.totalCumpleanos();
  }
}
