import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemarcheReviewsDetailsModalComponent } from './demarche-reviews-details-modal.component';

describe('DemarcheReviewsDetailsModalComponent', () => {
  let component: DemarcheReviewsDetailsModalComponent;
  let fixture: ComponentFixture<DemarcheReviewsDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemarcheReviewsDetailsModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemarcheReviewsDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
