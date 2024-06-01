import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturaNumerosComponent } from './captura-numeros.component';

describe('CapturaNumerosComponent', () => {
  let component: CapturaNumerosComponent;
  let fixture: ComponentFixture<CapturaNumerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CapturaNumerosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapturaNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
