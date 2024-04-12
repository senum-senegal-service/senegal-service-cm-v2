import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormulaireComponent } from './edit-formulaire.component';

describe('EditFormulaireComponent', () => {
  let component: EditFormulaireComponent;
  let fixture: ComponentFixture<EditFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditFormulaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
