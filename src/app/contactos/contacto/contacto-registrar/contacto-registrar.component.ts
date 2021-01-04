import { Component, OnInit, Input } from '@angular/core';
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
  update = false;
  title: string;
  title2: string;

  @Input()
  contactoRecibido: Contacto;

  constructor(
    private contactoService: ContactoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.contacto = new Contacto();
    this.crearFormulario();
    this.actualizar();
    this.llenarFormulario();
  }

  crearFormulario(): void{
    this.contacto.identificacion = '';
    this.contacto.nombre = '';
    this.contacto.celular = '';
    this.contacto.direccion = '';
    this.contacto.fecha = new Date();

    this.formGroup = this.formBuilder.group({
      identificacion: [this.contacto.identificacion, Validators.required],
      nombre: [this.contacto.nombre, Validators.required],
      celular: [this.contacto.celular, Validators.required],
      direccion: [this.contacto.direccion, Validators.required],
      fecha: [this.contacto.fecha, Validators.required]
    });
  }

  onSubmit(): void{
    let contacto: Contacto;
    if (this.formGroup.valid) {
      contacto = this.formGroup.value;
      if (this.contactoService.buscarContacto(contacto.identificacion) && this.update){
        this.guardarContacto();
        return;
      }else if (this.contactoService.buscarContacto(contacto.identificacion)){
        alert('Esta contacto ya esta registrado');
      }else{
        this.guardarContacto();
      }
    }
  }

  regresar(): void{
    window.history.back();
  }

  guardarContacto(): void{
    let contacto: Contacto;
    contacto = this.contactoRecibido;

    if (this.update) {
      contacto = this.formGroup.value;
      this.val(this.contactoService.put(contacto));
      this.regresar();
    }else{
      this.contacto = this.formGroup.value;
      this.val(this.contactoService.post(this.contacto));
      this.limpiarFormulario();
      this.regresar();
    }
  }

  val(contacto: Contacto): void{
    if (contacto && this.update){
      alert('Contacto actualizado correctamente');
    }else if (contacto){
      alert('Contacto registrado correctamente');
    }else{
      alert('Error al guardar');
    }
  }

  get control() {
    return this.formGroup.controls;
  }

  actualizar(): void{
    if (this.contactoRecibido){
      this.update = true;
      this.title2 = 'Actualizar contacto';
    }else{
      this.update = false;
      this.title = 'Crear contacto';
    }
  }

  limpiarFormulario(): void{
    this.formGroup.reset();
    this.llenarFormulario();
  }

  llenarFormulario(): void{
    if (this.contactoRecibido) {
      this.control.identificacion.setValue(this.contactoRecibido.identificacion);
      this.control.nombre.setValue(this.contactoRecibido.nombre);
      this.control.celular.setValue(this.contactoRecibido.celular);
      this.control.direccion.setValue(this.contactoRecibido.direccion);
      this.control.fecha.setValue(this.contactoRecibido.fecha);
    }else{
      this.control.identificacion.setValue('');
      this.control.nombre.setValue('');
      this.control.celular.setValue('');
      this.control.direccion.setValue('');
      this.control.fecha.setValue('');
    }
  }
}
