import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDemarcheComponent } from './edit-demarche.component';

describe('EditDemarcheComponent', () => {
  let component: EditDemarcheComponent;
  let fixture: ComponentFixture<EditDemarcheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDemarcheComponent]
    });
    fixture = TestBed.createComponent(EditDemarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
