import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import PRIMENG_IMPORTS from '../../provider/primeng.components';

@Component({
	selector: 'tools-categorie-form',
	standalone: true,
	templateUrl: './categorie-form.component.html',
	imports: [PRIMENG_IMPORTS, CommonModule, FormsModule, ReactiveFormsModule],
})
export class CategorieFormComponent implements OnInit {
	public checked: boolean = false;
	public formGarage!: FormGroup;

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.formGarage = this.fb.group({
			code: new FormControl('', [Validators.required, Validators.minLength(3)]),
			name: new FormControl('', [Validators.required, Validators.minLength(3)]),
			status: new FormControl(true, [Validators.required]),
		});
	}

	// Métodos helper para validaciones
	isFieldInvalid(fieldName: string): boolean {
		const field = this.formGarage.get(fieldName);
		return !!(field && field.invalid && (field.dirty || field.touched));
	}

	getFieldError(fieldName: string): string | null {
		const field = this.formGarage.get(fieldName);
		if (field && field.errors && (field.dirty || field.touched)) {
			if (field.errors['required']) {
				return `El ${fieldName === 'code' ? 'código' : 'nombre'} es obligatorio.`;
			}
			if (field.errors['minlength']) {
				return `El ${fieldName === 'code' ? 'código' : 'nombre'} debe tener al menos 3 caracteres.`;
			}
		}
		return null;
	}

	onSubmit(): void {
		console.log(this.formGarage.value);
	}
}
