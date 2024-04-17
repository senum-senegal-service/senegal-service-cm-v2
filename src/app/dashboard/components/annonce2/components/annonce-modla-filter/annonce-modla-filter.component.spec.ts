import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceModlaFilterComponent } from './annonce-modla-filter.component';

describe('AnnonceModlaFilterComponent', () => {
  let component: AnnonceModlaFilterComponent;
  let fixture: ComponentFixture<AnnonceModlaFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnonceModlaFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnnonceModlaFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
