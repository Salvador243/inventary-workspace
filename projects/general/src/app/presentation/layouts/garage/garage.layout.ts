import { Component, inject } from '@angular/core';
import PRIMENG_IMPORTS from '../../provider/primeng.components';
import { GarageListComponent } from '../../components/garages-list/garage-list.component';
import { GarageFormComponent } from '../../components/garage-form/garage-form.component';
import {infrastructureProviders} from '../../../infrastructure/di/provider';
import { GarageStateService } from '../../services/garage-state.service';

@Component({
	selector: 'general-garage-layout',
	standalone: true,
	templateUrl: './garage.layout.html',
	imports: [PRIMENG_IMPORTS, GarageListComponent, GarageFormComponent],
	providers: [...infrastructureProviders]
})
export class GarageLayoutComponent {
	private readonly garageStateService = inject(GarageStateService);
	public activeTab: string = 'list';
	public tabs = [
		{ value: 'list', label: 'Listado', icon: 'pi pi-list' },
		{ value: 'form', label: 'Taller', icon: 'pi pi-wrench' },
	];

	public onChangeTab(tab: string): void {
		this.activeTab = tab;
	}

	public clearSelectedGarage (): void {
		this.garageStateService.selectGarage(undefined);
	}
}
