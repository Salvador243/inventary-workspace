import {
	ApplicationConfig,
	provideBrowserGlobalErrorListeners,
	provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeuix/themes/lara';

import { routes } from './app.routes';
import { infrastructureProviders } from './infrastructure/di/provider';
import { CreateCategorieUseCase } from './application/use-cases/create-categorie.use-case';
import { UpdateCategorieUseCase } from './application/use-cases/update-categorie.use.case';
import { DeleteUseCase } from './application/use-cases/delete.use-case';
import { FetchCategorieUseCase } from './application/use-cases/fetch-categorie.use-case';
import { GetByUuidUseCase } from './application/use-cases/get-by-uuid.use-case';
import { CategorieStateService } from './presentation/services/categorie-state.service';

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideAnimationsAsync(),
		provideHttpClient(),
		providePrimeNG({
			theme: {
				preset: Lara,
			},
		}),
		...infrastructureProviders,
		CreateCategorieUseCase,
		UpdateCategorieUseCase,
		DeleteUseCase,
		FetchCategorieUseCase,
		GetByUuidUseCase,
		CategorieStateService,
	],
};
