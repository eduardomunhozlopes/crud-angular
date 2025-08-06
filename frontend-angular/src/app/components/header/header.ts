import { Component } from '@angular/core';
import { LucideAngularModule, ListCheck, Sparkles } from 'lucide-angular';
@Component({
	selector: 'crud-header',
	imports: [LucideAngularModule],
	templateUrl: './header.html',
	styleUrl: './header.css'
})
export class Header {
	readonly ListCheck = ListCheck;
	readonly Sparkles = Sparkles;
}
