import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDemarcheComponent } from './create-demarche.component';

describe('CreateDemarcheComponent', () => {
  let component: CreateDemarcheComponent;
  let fixture: ComponentFixture<CreateDemarcheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDemarcheComponent]
    });
    fixture = TestBed.createComponent(CreateDemarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
