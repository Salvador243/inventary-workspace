import {
	ApplicationConfig,
	provideBrowserGlobalErrorListeners,
	provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import Aura from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { CreateGarageUseCase } from './application/use-cases/create-garage.use-case';
import { DeleteGarageUseCase } from './application/use-cases/delete-garage.use-case';
import { FetchGarageUuidUseCase } from './application/use-cases/fetch-garage-uuid.use-case';
import { FetchGaragesUseCase } from './application/use-cases/fetch-garages-use-case';
import { UpdateGarageUseCase } from './application/use-cases/update-garage.use-case';
import { infrastructureProviders } from './infrastructure/di/provider';
import { GarageStateService } from './presentation/services/garage-state.service';

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideZoneChangeDetection({eventCoalescing: true}),
		provideRouter(routes),
		provideAnimationsAsync(),
		providePrimeNG({
			theme: {
				preset: Aura,
			},
		}),
		...infrastructureProviders,
		CreateGarageUseCase,
		UpdateGarageUseCase,
		DeleteGarageUseCase,
		FetchGaragesUseCase,
		FetchGarageUuidUseCase,
		GarageStateService,
	],
};
