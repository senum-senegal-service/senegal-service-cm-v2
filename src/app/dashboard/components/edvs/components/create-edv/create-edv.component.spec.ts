import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEdvComponent } from './create-edv.component';

describe('CreateEdvComponent', () => {
  let component: CreateEdvComponent;
  let fixture: ComponentFixture<CreateEdvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEdvComponent]
    });
    fixture = TestBed.createComponent(CreateEdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
