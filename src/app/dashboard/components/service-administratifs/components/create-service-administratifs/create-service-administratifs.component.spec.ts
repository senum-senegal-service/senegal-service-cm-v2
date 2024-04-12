import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceAdministratifsComponent } from './create-service-administratifs.component';

describe('CreateServiceAdministratifsComponent', () => {
  let component: CreateServiceAdministratifsComponent;
  let fixture: ComponentFixture<CreateServiceAdministratifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateServiceAdministratifsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateServiceAdministratifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
