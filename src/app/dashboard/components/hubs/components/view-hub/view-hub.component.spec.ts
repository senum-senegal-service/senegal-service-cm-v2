import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHubComponent } from './view-hub.component';

describe('ViewHubComponent', () => {
  let component: ViewHubComponent;
  let fixture: ComponentFixture<ViewHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewHubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
