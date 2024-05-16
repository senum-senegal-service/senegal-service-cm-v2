import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdvsComponent } from './edv.component';

describe('EdvsComponent', () => {
  let component: EdvsComponent;
  let fixture: ComponentFixture<EdvsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdvsComponent]
    });
    fixture = TestBed.createComponent(EdvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
