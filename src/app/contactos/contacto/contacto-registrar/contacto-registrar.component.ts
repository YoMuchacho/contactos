import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';

import { Contacto } from '@contactos/modelos/contacto';
import { ContactoService } from '@contactos/servicios/contacto.service';

@Component({
  selector: 'app-contacto-registrar',
  templateUrl: './contacto-registrar.component.html',
  styleUrls: ['./contacto-registrar.component.css']
})
export class ContactoRegistrarComponent implements OnInit {

  contacto: Contacto;
  formGroup: FormGroup;

  constructor(
    private contactoService: ContactoService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.contacto = new Contacto();
    this.crearFormulario();
  }

  crearFormulario(): void{
    this.contacto.identificacion = '';
    this.contacto.nombre = '';
    this.contacto.celular = '';
    this.contacto.direccion = '';
    this.contacto.fecha = '';

    this.formGroup = this.formBuilder.group({
      identificacion: [this.contacto.identificacion, Validators.required],
      nombre: [this.contacto.nombre, Validators.required],
      celular: [this.contacto.celular, Validators.required],
      direccion: [this.contacto.direccion, Validators.required],
      fecha: [this.contacto.fecha, Validators.required]
    });
  }

  onSubmit(): void{
    if (this.formGroup.valid) {
      this.guardarContacto();
    }
  }

  guardarContacto(): void{
    this.contacto = this.formGroup.value;
    this.contacto.idLocal = String(this.contactoService.totalContactos() + 1);
    this.contactoService.guardarContacto(this.contacto);
    this.formGroup.reset();
  }
}
