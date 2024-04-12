import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleLettresFormComponent } from './modele-lettres-form.component';

describe('ModeleLettresFormComponent', () => {
  let component: ModeleLettresFormComponent;
  let fixture: ComponentFixture<ModeleLettresFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModeleLettresFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModeleLettresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
