import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLienUtilesComponent } from './edit-lien-utiles.component';

describe('EditLienUtilesComponent', () => {
  let component: EditLienUtilesComponent;
  let fixture: ComponentFixture<EditLienUtilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditLienUtilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditLienUtilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
