import {Provider} from '@angular/core';
import {HttpGarageRepository} from '../../domain/repositories/http-garage.repository';
import {ApiGarageRepository} from '../repositories/api-garage.repository';

export const infrastructureProviders: Provider[] = [
	{ provide: HttpGarageRepository, useClass: ApiGarageRepository }
];
