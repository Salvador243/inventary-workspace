import { Component } from '@angular/core';
import PRIMENG_IMPORTS from '../../provider/primeng.components';
import { AssignmentListComponent } from '../../components/assignment-list/assignment-list.component';
import { AssignmentFormComponent } from '../../components/assignment-form/assignment-form.component';

@Component({
	selector: 'assignments-layout',
	standalone: true,
	templateUrl: './assignments.layout.html',
	imports: [PRIMENG_IMPORTS, AssignmentListComponent, AssignmentFormComponent],
})
export class AssignmentsLayoutComponent {
	public tabs = [
		{ value: 'list', label: 'Listado', icon: 'pi pi-list' },
		{ value: 'form', label: 'Asignación', icon: 'pi pi-user-plus' },
	];
}