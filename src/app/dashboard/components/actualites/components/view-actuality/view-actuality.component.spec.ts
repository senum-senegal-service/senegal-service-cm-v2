import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActualityComponent } from './view-actuality.component';

describe('ViewActualityComponent', () => {
  let component: ViewActualityComponent;
  let fixture: ComponentFixture<ViewActualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewActualityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewActualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
