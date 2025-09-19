import { Component } from '@angular/core';
import PRIMENG_IMPORTS from '../../provider/primeng.components';
import { GarageListComponent } from '../../components/garages-list/garage-list.component';
import { GarageFormComponent } from '../../components/garage-form/garage-form.component';

@Component({
	selector: 'general-garage-layout',
	standalone: true,
	templateUrl: './garage.layout.html',
	imports: [PRIMENG_IMPORTS, GarageListComponent, GarageFormComponent],
})
export class GarageLayoutComponent {
	public tabs = [
		{ value: 'list', label: 'Listado', icon: 'pi pi-list' },
		{ value: 'form', label: 'Taller', icon: 'pi pi-wrench' },
	];
}
