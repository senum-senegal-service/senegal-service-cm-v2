import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStructureComponent } from './edit-structure.component';

describe('EditStructureComponent', () => {
  let component: EditStructureComponent;
  let fixture: ComponentFixture<EditStructureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditStructureComponent]
    });
    fixture = TestBed.createComponent(EditStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
