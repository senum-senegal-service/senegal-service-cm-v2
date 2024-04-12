import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemarchesComponent } from './demarches.component';

describe('DemarchesComponent', () => {
  let component: DemarchesComponent;
  let fixture: ComponentFixture<DemarchesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemarchesComponent]
    });
    fixture = TestBed.createComponent(DemarchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
