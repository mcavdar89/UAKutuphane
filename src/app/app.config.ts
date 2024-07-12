import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppConfig } from './infrastructure/app-config';
import { environment } from '../environments/environment';
import { appHttpInterceptor } from './infrastructure/interceptors/app-http.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withInterceptors([appHttpInterceptor])),
    {
      provide: AppConfig,
      useValue: environment
    }

  ]
};
