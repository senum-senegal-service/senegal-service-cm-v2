import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LienUtilesFormComponent } from './lien-utiles-form.component';

describe('LienUtilesFormComponent', () => {
  let component: LienUtilesFormComponent;
  let fixture: ComponentFixture<LienUtilesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LienUtilesFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LienUtilesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
