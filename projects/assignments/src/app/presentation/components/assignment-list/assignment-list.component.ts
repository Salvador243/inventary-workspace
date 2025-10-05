import { Component } from '@angular/core';
import PRIMENG_IMPORTS from '../../provider/primeng.components';
import { Assignment } from '../../../domain/entities/assignment.entity';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'assignments-assignment-list',
	standalone: true,
	templateUrl: './assignment-list.component.html',
	imports: [PRIMENG_IMPORTS, CommonModule, FormsModule],
})

export class AssignmentListComponent {
	public assignments: Assignment[] = [
		{
			id: '1',
			usuario_asignado: 'Juan Pérez',
			herramienta: ['Taladro Eléctrico', 'Destornillador'],
			fecha_hora_salida: new Date('2024-01-15T08:00:00'),
			fecha_hora_regreso: new Date('2024-01-15T17:00:00'),
			condicion: 'Excelente',
		},
		{
			id: '2',
			usuario_asignado: 'María García',
			herramienta: ['Multímetro Digital'],
			fecha_hora_salida: new Date('2024-01-16T09:00:00'),
			fecha_hora_regreso: undefined,
			condicion: 'Bueno',
		},
		{
			id: '3',
			usuario_asignado: 'Carlos López',
			herramienta: ['Compresor Neumático', 'Llave Inglesa'],
			fecha_hora_salida: new Date('2024-01-17T07:30:00'),
			fecha_hora_regreso: new Date('2024-01-17T16:30:00'),
			condicion: 'Averiado',
		},
	];
}
