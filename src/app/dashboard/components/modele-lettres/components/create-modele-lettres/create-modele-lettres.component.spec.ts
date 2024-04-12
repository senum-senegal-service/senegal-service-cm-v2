import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModeleLettresComponent } from './create-modele-lettres.component';

describe('CreateModeleLettresComponent', () => {
  let component: CreateModeleLettresComponent;
  let fixture: ComponentFixture<CreateModeleLettresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateModeleLettresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateModeleLettresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
