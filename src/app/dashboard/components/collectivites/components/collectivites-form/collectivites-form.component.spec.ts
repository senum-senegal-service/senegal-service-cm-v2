import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectivitesFormComponent } from './collectivites-form.component';

describe('CollectivitesFormComponent', () => {
  let component: CollectivitesFormComponent;
  let fixture: ComponentFixture<CollectivitesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollectivitesFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollectivitesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
