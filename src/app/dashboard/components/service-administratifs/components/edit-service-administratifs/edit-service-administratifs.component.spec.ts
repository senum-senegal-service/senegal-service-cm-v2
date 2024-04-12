import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServiceAdministratifsComponent } from './edit-service-administratifs.component';

describe('EditServiceAdministratifsComponent', () => {
  let component: EditServiceAdministratifsComponent;
  let fixture: ComponentFixture<EditServiceAdministratifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditServiceAdministratifsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditServiceAdministratifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
