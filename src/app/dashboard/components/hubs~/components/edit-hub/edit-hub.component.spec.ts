import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHubComponent } from './edit-hub.component';

describe('EditHubComponent', () => {
  let component: EditHubComponent;
  let fixture: ComponentFixture<EditHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditHubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
