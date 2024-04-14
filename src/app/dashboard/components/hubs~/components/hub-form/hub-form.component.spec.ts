import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubFormComponent } from './hub-form.component';

describe('HubFormComponent', () => {
  let component: HubFormComponent;
  let fixture: ComponentFixture<HubFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HubFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HubFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
