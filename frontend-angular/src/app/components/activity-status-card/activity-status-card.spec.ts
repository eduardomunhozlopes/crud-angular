import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityStatusCard } from './activity-status-card';

describe('ActivityStatusCard', () => {
  let component: ActivityStatusCard;
  let fixture: ComponentFixture<ActivityStatusCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityStatusCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityStatusCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
