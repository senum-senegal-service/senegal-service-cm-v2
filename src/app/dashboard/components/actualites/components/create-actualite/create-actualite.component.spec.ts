import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateActualiteComponent } from './create-actualite.component';

describe('CreateActualiteComponent', () => {
  let component: CreateActualiteComponent;
  let fixture: ComponentFixture<CreateActualiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateActualiteComponent]
    });
    fixture = TestBed.createComponent(CreateActualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
