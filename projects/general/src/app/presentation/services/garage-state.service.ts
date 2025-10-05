import { Injectable, signal, computed } from '@angular/core';
import { Garage } from '../../domain/entities/garages.entity';

@Injectable({
  providedIn: 'root'
})
export class GarageStateService {
  private readonly _garages = signal<Garage[]>([]);
  private readonly _shouldReload = signal<boolean>(false);
	private readonly _garageSelected = signal<Garage | undefined>(undefined)

  public readonly garages = computed(() => this._garages());
  public readonly shouldReload = computed(() => this._shouldReload());
	public readonly garageSelected = computed(() => this._garageSelected());

	selectGarage(garage: Garage | undefined): void {
		this._garageSelected.set(garage);
	}

  updateGarages(garages: Garage[]): void {
    this._garages.set(garages);
  }

  triggerReload(): void {
    this._shouldReload.set(true);
  }

  resetReloadFlag(): void {
    this._shouldReload.set(false);
  }
}
