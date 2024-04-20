import { createReducer, on } from "@ngrx/store";
import { AlertInterface } from "./models/alerts.model";
import { addAlert, removeAlert } from "./alerts.actions";

export interface AlertState {
  alerts: AlertInterface[];
}

export const initialAlertState: AlertState = {
  alerts: [],
};

export const alertReducer = createReducer(
  initialAlertState,
  on(addAlert, (state, { alert }) => ({
    ...state,
    alerts: [...state.alerts, alert],
  })),
  on(removeAlert, (state, { id }) => ({
    ...state,
    alerts: state.alerts.filter(alert => alert.id !== id),
  }))
);