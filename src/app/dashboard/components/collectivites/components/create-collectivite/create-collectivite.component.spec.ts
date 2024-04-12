import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCollectiviteComponent } from './create-collectivite.component';

describe('CreateCollectiviteComponent', () => {
  let component: CreateCollectiviteComponent;
  let fixture: ComponentFixture<CreateCollectiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateCollectiviteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCollectiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
