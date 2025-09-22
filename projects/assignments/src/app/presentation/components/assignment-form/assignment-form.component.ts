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
	selector: 'assignments-assignment-form',
	standalone: true,
	templateUrl: './assignment-form.component.html',
	imports: [PRIMENG_IMPORTS, CommonModule, FormsModule, ReactiveFormsModule],
})
export class AssignmentFormComponent implements OnInit {
	public formAssignment!: FormGroup;

	public herramientasDisponibles = [
		'Taladro Eléctrico',
		'Destornillador',
		'Multímetro Digital',
		'Compresor Neumático',
		'Llave Inglesa',
		'Martillo',
		'Sierra Eléctrica',
		'Soldadora',
	];

	public condicionesDisponibles = [
		'Excelente',
		'Bueno',
		'Averiado',
	];

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.formAssignment = this.fb.group({
			usuario_asignado: new FormControl('', [Validators.required]),
			herramienta: new FormControl([], [Validators.required, this.minArrayLengthValidator(1)]),
			fecha_hora_salida: new FormControl('', [Validators.required]),
			fecha_hora_regreso: new FormControl(''),
			condicion: new FormControl('', [Validators.required]),
		});
	}

	// Validador personalizado para array mínimo
	minArrayLengthValidator(minLength: number) {
		return (control: any) => {
			if (control.value && Array.isArray(control.value) && control.value.length >= minLength) {
				return null;
			}
			return { minArrayLength: { requiredLength: minLength, actualLength: control.value?.length || 0 } };
		};
	}

	// Métodos helper para validaciones
	isFieldInvalid(fieldName: string): boolean {
		const field = this.formAssignment.get(fieldName);
		return !!(field && field.invalid && (field.dirty || field.touched));
	}

	getFieldError(fieldName: string): string | null {
		const field = this.formAssignment.get(fieldName);
		if (field && field.errors && (field.dirty || field.touched)) {
			if (field.errors['required']) {
				const fieldLabels: { [key: string]: string } = {
					usuario_asignado: 'usuario asignado',
					herramienta: 'herramienta',
					fecha_hora_salida: 'fecha y hora de salida',
					condicion: 'condición',
				};
				return `El ${fieldLabels[fieldName] || fieldName} es obligatorio.`;
			}
			if (field.errors['minArrayLength']) {
				return 'Debe seleccionar al menos una herramienta.';
			}
		}
		return null;
	}

	onSubmit(): void {
		if (this.formAssignment.valid) {
			console.log('Datos de la asignación:', this.formAssignment.value);
		} else {
			console.log('Formulario inválido');
			// Marcar todos los campos como touched para mostrar errores
			Object.keys(this.formAssignment.controls).forEach(key => {
				this.formAssignment.get(key)?.markAsTouched();
			});
		}
	}
}