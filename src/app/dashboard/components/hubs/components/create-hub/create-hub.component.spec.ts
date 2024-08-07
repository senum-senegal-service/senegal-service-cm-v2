import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHubComponent } from './create-hub.component';

describe('CreateHubComponent', () => {
  let component: CreateHubComponent;
  let fixture: ComponentFixture<CreateHubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateHubComponent]
    });
    fixture = TestBed.createComponent(CreateHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
