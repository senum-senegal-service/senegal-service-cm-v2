import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAdministratifsComponent } from './service-administratifs.component';

describe('ServiceAdministratifsComponent', () => {
  let component: ServiceAdministratifsComponent;
  let fixture: ComponentFixture<ServiceAdministratifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceAdministratifsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceAdministratifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
