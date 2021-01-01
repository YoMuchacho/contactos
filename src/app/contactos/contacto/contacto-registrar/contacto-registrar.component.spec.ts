import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoRegistrarComponent } from './contacto-registrar.component';

describe('ContactoRegistrarComponent', () => {
  let component: ContactoRegistrarComponent;
  let fixture: ComponentFixture<ContactoRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoRegistrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
