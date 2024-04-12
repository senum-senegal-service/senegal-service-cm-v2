import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDescripteursComponent } from './edit-descripteurs.component';

describe('EditDescripteursComponent', () => {
  let component: EditDescripteursComponent;
  let fixture: ComponentFixture<EditDescripteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDescripteursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDescripteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
