import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoActualizarComponent } from './contacto-actualizar.component';

describe('ContactoActualizarComponent', () => {
  let component: ContactoActualizarComponent;
  let fixture: ComponentFixture<ContactoActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoActualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
