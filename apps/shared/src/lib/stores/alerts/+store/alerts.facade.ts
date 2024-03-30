import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { addAlert, removeAlert } from "./alerts.actions";
import { selectAllAlerts } from "./alerts.selectors";
import { AlertInterface } from "./models/alerts.models";

@Injectable({ providedIn: 'root' })
export class AlertFacade {
  alerts$: Observable<AlertInterface[]> = this.store.select(selectAllAlerts);

  constructor(private store: Store) {}

  addAlert(alert: AlertInterface): void {
    this.store.dispatch(addAlert({ alert }));
  }

  removeAlert(id: number): void {
    this.store.dispatch(removeAlert({ id }));
  }
}