import { Component, Input } from '@angular/core';

@Component({
	selector: 'activity-status-card',
	imports: [],
	templateUrl: './activity-status-card.html',
	styleUrl: './activity-status-card.css'
})
export class ActivityStatusCard {
	@Input() cardData: {
		count: number | string;
		status: string;
		color?: string;
	} = { count: 0, status: '' };

}
