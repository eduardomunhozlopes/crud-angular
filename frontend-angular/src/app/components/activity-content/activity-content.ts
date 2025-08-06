import { Component } from '@angular/core';
import { ActivityStatusCard } from '../activity-status-card/activity-status-card';
import { ActivityFilter } from '../activity-filter/activity-filter';
import { ActivityCard } from '../activity-card/activity-card';

@Component({
	selector: 'activity-content',
	imports: [ActivityStatusCard, ActivityFilter, ActivityCard],
	templateUrl: './activity-content.html',
	styleUrl: './activity-content.css'
})
export class ActivityContent {

}
