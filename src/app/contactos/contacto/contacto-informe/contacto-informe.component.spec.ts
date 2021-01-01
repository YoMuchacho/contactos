import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoInformeComponent } from './contacto-informe.component';

describe('ContactoInformeComponent', () => {
  let component: ContactoInformeComponent;
  let fixture: ComponentFixture<ContactoInformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoInformeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoInformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
