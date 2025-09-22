import { Component } from '@angular/core';
import PRIMENG_IMPORTS from '../../provider/primeng.components';
import { CategorieListComponent } from '../../components/categorie-list/categorie-list.component';
import { CategorieFormComponent } from '../../components/categorie-form/categorie-form.component';

@Component({
	selector: 'general-categories-layout',
	standalone: true,
	templateUrl: './categories.layout.html',
		imports: [PRIMENG_IMPORTS, CategorieListComponent, CategorieFormComponent],

})
export class CategoriesLayoutComponent {
	public tabs = [
		{ value: 'list', label: 'Listado', icon: 'pi pi-list' },
		{ value: 'form', label: 'Categoria', icon: 'pi pi-th-large' },
	];
}
