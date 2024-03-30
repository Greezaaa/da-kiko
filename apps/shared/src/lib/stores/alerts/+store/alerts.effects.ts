import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { filter, delay, map } from "rxjs";
import { addAlert, removeAlert } from "./alerts.actions";
import { AlertType } from "./models/alerts.models";

@Injectable()
export class AlertEffects {
  autoDismissAlert$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addAlert),
      filter(({ alert }) => alert.type !== AlertType.Sticky),
      delay(3000), // Adjust the time based on your needs
      map(({ alert }) => removeAlert({ id: alert.id }))
    )
  );

  constructor(private actions$: Actions) {}
}