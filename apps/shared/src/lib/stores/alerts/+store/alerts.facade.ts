import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { addAlert, removeAlert } from "./alerts.actions";
import { selectAllAlerts } from "./alerts.selectors";
import { AlertInterface, AlertType } from "./models/alerts.model";

@Injectable({ providedIn: "root" })
export class AlertFacade {
  alerts$ = this.store.select(selectAllAlerts);
  constructor(private store: Store) {}

  addAlert(message: string, type: AlertType): void {
    const alert = {
      id: this.generateUniqueId(),
      message,
      type,
      duration: 3000,
    };
    this.store.dispatch(addAlert({ alert }));
  }

  removeAlert(id: number): void {
    this.store.dispatch(removeAlert({ id }));
  }

  private generateUniqueId(): number {
    return Date.now();
  }
}
