import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemarcheFormComponent } from './demarche-form.component';

describe('DemarcheFormComponent', () => {
  let component: DemarcheFormComponent;
  let fixture: ComponentFixture<DemarcheFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemarcheFormComponent]
    });
    fixture = TestBed.createComponent(DemarcheFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
