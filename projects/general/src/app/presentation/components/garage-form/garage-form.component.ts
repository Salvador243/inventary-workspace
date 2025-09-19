import { Component } from '@angular/core';
import PRIMENG_IMPORTS from '../../provider/primeng.components';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'general-garage-form',
	standalone: true,
	templateUrl: './garage-form.component.html',
	imports: [PRIMENG_IMPORTS, CommonModule, FormsModule]
})
export class GarageFormComponent {
	public checked: boolean = false;
}
