import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityFilter } from './activity-filter';

describe('ActivityFilter', () => {
  let component: ActivityFilter;
  let fixture: ComponentFixture<ActivityFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
