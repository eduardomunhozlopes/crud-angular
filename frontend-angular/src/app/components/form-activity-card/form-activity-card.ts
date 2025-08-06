import { Component } from '@angular/core';
import { LucideAngularModule, Plus, PenLine } from 'lucide-angular';

@Component({
	selector: 'form-activity-card',
	imports: [LucideAngularModule],
	templateUrl: './form-activity-card.html',
	styleUrl: './form-activity-card.css'
})
export class FormActivityCard {
	readonly Plus = Plus;
	readonly PenLine = PenLine;
	newActivity = false;

}
