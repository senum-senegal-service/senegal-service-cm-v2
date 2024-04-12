import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LienUtilesComponent } from './lien-utiles.component';

describe('LienUtilesComponent', () => {
  let component: LienUtilesComponent;
  let fixture: ComponentFixture<LienUtilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LienUtilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LienUtilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
