import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHubComponent } from './create-hub.component';

describe('CreateHubComponent', () => {
  let component: CreateHubComponent;
  let fixture: ComponentFixture<CreateHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateHubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
