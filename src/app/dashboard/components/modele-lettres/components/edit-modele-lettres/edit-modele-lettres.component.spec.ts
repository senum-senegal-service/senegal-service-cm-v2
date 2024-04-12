import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModeleLettresComponent } from './edit-modele-lettres.component';

describe('EditModeleLettresComponent', () => {
  let component: EditModeleLettresComponent;
  let fixture: ComponentFixture<EditModeleLettresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditModeleLettresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditModeleLettresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
