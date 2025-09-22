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
	selector: 'tools-tool-form',
	standalone: true,
	templateUrl: './tool-form.component.html',
	imports: [PRIMENG_IMPORTS, CommonModule, FormsModule, ReactiveFormsModule],
})
export class ToolFormComponent implements OnInit {
	public formTool!: FormGroup;

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.formTool = this.fb.group({
			code: new FormControl('', [Validators.required, Validators.minLength(3)]),
			nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
			categoria: new FormControl('', [Validators.required]),
			contador_activos: new FormControl(0, [Validators.required, Validators.min(0)]),
			contador_fuera_de_servicio: new FormControl(0, [Validators.required, Validators.min(0)]),
			imagen: new FormControl('', [Validators.required]),
			taller: new FormControl('', [Validators.required]),
			estatus: new FormControl(true, [Validators.required]),
		});
	}

	isFieldInvalid(fieldName: string): boolean {
		const field = this.formTool.get(fieldName);
		return !!(field && field.invalid && (field.dirty || field.touched));
	}

	getFieldError(fieldName: string): string | null {
		const field = this.formTool.get(fieldName);
		if (field && field.errors && (field.dirty || field.touched)) {
			if (field.errors['required']) {
				const fieldLabels: { [key: string]: string } = {
					code: 'código',
					nombre: 'nombre',
					categoria: 'categoría',
					contador_activos: 'contador de activos',
					contador_fuera_de_servicio: 'contador fuera de servicio',
					imagen: 'imagen',
					taller: 'taller',
				};
				return `El ${fieldLabels[fieldName] || fieldName} es obligatorio.`;
			}
			if (field.errors['minlength']) {
				return `El ${fieldName === 'code' ? 'código' : 'nombre'} debe tener al menos 3 caracteres.`;
			}
			if (field.errors['min']) {
				return `El valor debe ser mayor o igual a 0.`;
			}
		}
		return null;
	}

	onFileSelect(event: any): void {
		const file = event.files[0];
		if (file) {
			this.formTool.patchValue({ imagen: file.name });
			console.log('Archivo seleccionado:', file);
		}
	}

	onSubmit(): void {
		if (this.formTool.valid) {
			console.log('Datos de la herramienta:', this.formTool.value);
		} else {
			console.log('Formulario inválido');
			// Marcar todos los campos como touched para mostrar errores
			Object.keys(this.formTool.controls).forEach(key => {
				this.formTool.get(key)?.markAsTouched();
			});
		}
	}
}