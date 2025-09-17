import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
	selector: 'tools-home-layout',
	standalone: true,
	imports: [ButtonModule],
	templateUrl: './home.layout.html',
})
export class HomeLayoutComponent {}
