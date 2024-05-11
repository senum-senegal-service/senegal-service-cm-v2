import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDemarcheComponent } from './view-demarche.component';

describe('ViewDemarcheComponent', () => {
  let component: ViewDemarcheComponent;
  let fixture: ComponentFixture<ViewDemarcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewDemarcheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewDemarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
