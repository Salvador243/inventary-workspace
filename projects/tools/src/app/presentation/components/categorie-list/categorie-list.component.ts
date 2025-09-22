import { Component } from '@angular/core';
import PRIMENG_IMPORTS from '../../provider/primeng.components';
import { Categorie } from '../../../domain/entities/categorie.entity';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'tools-categorie-list',
	standalone: true,
	templateUrl: './categorie-list.component.html',
	imports: [...PRIMENG_IMPORTS, CommonModule, FormsModule],
})

export class CategorieListComponent {
	public categories: Categorie[] = [
		{
			id: '1',
			code: '123',
			name: 'Mecanica',
			status: true,
		},
		{
			id: '2',
			code: '456',
			name: 'Digital',
			status: false,
		},
		{
			id: '3',
			code: '789',
			name: 'Neumatica',
			status: true,
		},
	];
}
