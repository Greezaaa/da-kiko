import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { alertReducer, AlertEffects, menuReducer, MenuEffects } from '@lib/shared';
import { provideEffects } from '@ngrx/effects';

import { AppComponent } from './app/layout/app/app.component';

const reducers = {
  alerts: alertReducer, 
  menu: menuReducer, 
};
const effects = [ 
  AlertEffects, 
  MenuEffects
]
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideEffects(effects),
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
