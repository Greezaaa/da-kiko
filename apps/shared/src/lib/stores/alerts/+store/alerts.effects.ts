import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { delay, map, mergeMap, of, EMPTY } from "rxjs";

import { addAlert, removeAlert } from "./alerts.actions";
import { AlertType } from "./models/alerts.model";

@Injectable()
export class AlertEffects {
  autoRemoveAlert$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addAlert),
      mergeMap((action) =>
        action.alert.type !== AlertType.Sticky
          ? of(action).pipe(
              delay(3000),
              map(() => removeAlert({ id: action.alert.id }))
            )
          : EMPTY
      )
    )
  );
  constructor(private actions$: Actions) {}
}
