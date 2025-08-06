import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActivityCard } from './form-activity-card';

describe('FormActivityCard', () => {
  let component: FormActivityCard;
  let fixture: ComponentFixture<FormActivityCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormActivityCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormActivityCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
