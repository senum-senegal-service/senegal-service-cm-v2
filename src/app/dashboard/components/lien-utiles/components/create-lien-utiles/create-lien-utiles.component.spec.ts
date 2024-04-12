import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLienUtilesComponent } from './create-lien-utiles.component';

describe('CreateLienUtilesComponent', () => {
  let component: CreateLienUtilesComponent;
  let fixture: ComponentFixture<CreateLienUtilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateLienUtilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateLienUtilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
