import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomPageDashboardComponent } from './bottom-page-dashboard.component';

describe('BottomPageDashboardComponent', () => {
  let component: BottomPageDashboardComponent;
  let fixture: ComponentFixture<BottomPageDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomPageDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottomPageDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
