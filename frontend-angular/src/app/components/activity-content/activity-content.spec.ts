import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityContent } from './activity-content';

describe('ActivityContent', () => {
  let component: ActivityContent;
  let fixture: ComponentFixture<ActivityContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
