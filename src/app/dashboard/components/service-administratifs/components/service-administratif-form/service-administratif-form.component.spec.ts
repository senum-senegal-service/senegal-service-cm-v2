import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAdministratifFormComponent } from './service-administratif-form.component';

describe('ServiceAdministratifFormComponent', () => {
  let component: ServiceAdministratifFormComponent;
  let fixture: ComponentFixture<ServiceAdministratifFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceAdministratifFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceAdministratifFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
