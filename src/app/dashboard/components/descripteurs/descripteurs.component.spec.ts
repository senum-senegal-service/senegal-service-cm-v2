import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripteursComponent } from './descripteurs.component';

describe('DescripteursComponent', () => {
  let component: DescripteursComponent;
  let fixture: ComponentFixture<DescripteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DescripteursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescripteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
