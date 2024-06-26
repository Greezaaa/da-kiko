import { createAction, props } from '@ngrx/store';

import { AlertInterface } from './models/alerts.model';

export const addAlert = createAction(
  '[Alert] Add Alert',
  props<{ alert: AlertInterface }>()
);

export const removeAlert = createAction(
  '[Alert] Remove Alert',
  props<{ id: number }>()
);