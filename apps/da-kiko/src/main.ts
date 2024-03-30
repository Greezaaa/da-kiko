import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/layout/app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { provideStore } from '@ngrx/store';

import { provideStoreDevtools } from '@ngrx/store-devtools';
import { alertReducer, AlertEffects } from '@lib/shared';
import { provideEffects } from '@ngrx/effects';

const reducers = {
  alerts: alertReducer, 
};
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideEffects([AlertEffects]),
    provideStore(reducers),
    provideStoreDevtools({
      maxAge: 25, 
      logOnly: !isDevMode(), 
      autoPause: true, 
      trace: false, 
      traceLimit: 75,
    }),
  ],
}).catch((err) => console.error(err));
