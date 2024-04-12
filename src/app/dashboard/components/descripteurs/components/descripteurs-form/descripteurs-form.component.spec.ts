import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripteursFormComponent } from './descripteurs-form.component';

describe('DescripteursFormComponent', () => {
  let component: DescripteursFormComponent;
  let fixture: ComponentFixture<DescripteursFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DescripteursFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescripteursFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
