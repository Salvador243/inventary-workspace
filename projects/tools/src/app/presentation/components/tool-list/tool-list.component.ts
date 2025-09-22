import { Component } from '@angular/core';
import PRIMENG_IMPORTS from '../../provider/primeng.components';
import { Tool } from '../../../domain/entities/tool.entity';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'tools-tool-list',
	standalone: true,
	templateUrl: './tool-list.component.html',
	imports: [...PRIMENG_IMPORTS, CommonModule, FormsModule],
})

export class ToolListComponent {
	public tools: Tool[] = [
		{
			id: '1',
			code: 'TL001',
			nombre: 'Taladro Eléctrico',
			categoria: 'Mecanica',
			contador_activos: 5,
			contador_fuera_de_servicio: 2,
			imagen: 'taladro.jpg',
			taller: 'Taller A',
			estatus: true,
		},
		{
			id: '2',
			code: 'TL002',
			nombre: 'Multímetro Digital',
			categoria: 'Digital',
			contador_activos: 3,
			contador_fuera_de_servicio: 1,
			imagen: 'multimetro.jpg',
			taller: 'Taller B',
			estatus: false,
		},
		{
			id: '3',
			code: 'TL003',
			nombre: 'Compresor Neumático',
			categoria: 'Neumatica',
			contador_activos: 2,
			contador_fuera_de_servicio: 0,
			imagen: 'compresor.jpg',
			taller: 'Taller C',
			estatus: true,
		},
	];
}