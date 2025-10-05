import {CommonModule} from '@angular/common';
import {Component, DestroyRef, effect, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators,} from '@angular/forms';
import PRIMENG_IMPORTS from '../../provider/primeng.components';
import {CreateGarageUseCase} from '../../../application/use-cases/create-garage.use-case';
import {GarageStateService} from '../../services/garage-state.service';

@Component({
	selector: 'general-garage-form',
	standalone: true,
	templateUrl: './garage-form.component.html',
	imports: [PRIMENG_IMPORTS, CommonModule, FormsModule, ReactiveFormsModule],
	providers: [CreateGarageUseCase],
})
export class GarageFormComponent implements OnInit {
	public checked: boolean = false;
	public formGarage!: FormGroup;

	private readonly garageStateService = inject(GarageStateService);
	private readonly destroyRef = inject(DestroyRef);

	@Output()
	changeTab = new EventEmitter<string>();

	constructor(
		private fb: FormBuilder,
		private createGarageUseCase: CreateGarageUseCase
	) {
		effect(() => {
			const selectedGarage = this.garageStateService.garageSelected();
			if (!this.formGarage) return;
			if (!selectedGarage) {
				this.formGarage.reset();
				this.checked = false;
				return;
			}

			this.formGarage.patchValue({
				uuid: selectedGarage.uuid,
				code: selectedGarage.code,
				name: selectedGarage.name,
				status: selectedGarage.status
			});
			this.checked = selectedGarage.status;
		});
	}

	ngOnInit(): void {
		this.formGarage = this.fb.group({
			uuid: new FormControl(''),
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

	async onSubmit(): Promise<void> {
		await this.createGarageUseCase.execute(this.formGarage.value);
		this.garageStateService.triggerReload();
		this.changeTab.emit('list');
		this.onReset();
		this.checked = false;
	}

	onReset(): void {
		this.formGarage.reset();
	}
}
