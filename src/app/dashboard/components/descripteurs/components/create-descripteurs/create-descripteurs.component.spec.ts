import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDescripteursComponent } from './create-descripteurs.component';

describe('CreateDescripteursComponent', () => {
  let component: CreateDescripteursComponent;
  let fixture: ComponentFixture<CreateDescripteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateDescripteursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateDescripteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
