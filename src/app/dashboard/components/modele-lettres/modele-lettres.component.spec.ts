import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleLettresComponent } from './modele-lettres.component';

describe('ModeleLettresComponent', () => {
  let component: ModeleLettresComponent;
  let fixture: ComponentFixture<ModeleLettresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModeleLettresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModeleLettresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
