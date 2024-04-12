import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCollectiviteComponent } from './edit-collectivite.component';

describe('EditCollectiviteComponent', () => {
  let component: EditCollectiviteComponent;
  let fixture: ComponentFixture<EditCollectiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCollectiviteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCollectiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
