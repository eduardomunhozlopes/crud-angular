import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { FormActivityCard } from '../../components/form-activity-card/form-activity-card';
import { ActivityContent } from '../../components/activity-content/activity-content';

@Component({
	selector: 'crud-home',
	imports: [Header, FormActivityCard, ActivityContent],
	templateUrl: './home.html',
	styleUrl: './home.css'
})
export class Home {

}
