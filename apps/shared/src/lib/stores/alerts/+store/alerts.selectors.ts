import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AlertState } from "./alerts.reducers";

export const selectAlertFeature = createFeatureSelector<AlertState>('alerts');

export const selectAllAlerts = createSelector(
  selectAlertFeature,
  (state: AlertState) => state.alerts
);