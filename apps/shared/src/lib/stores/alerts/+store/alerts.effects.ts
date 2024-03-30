import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { filter, delay, map, tap, mergeMap, of, EMPTY } from "rxjs";
import { addAlert, removeAlert } from "./alerts.actions";
import { AlertType } from "./models/alerts.models";

@Injectable()
export class AlertEffects {
  
  // logAddAlert$ = createEffect(() => 
  //   this.actions$.pipe(
  //     ofType(addAlert),
  //     tap((action) => console.log('Add Alert Action Dispatched:', action))
  //   ),
  //   { dispatch: false }
  // );

  // autoRemoveAlert$ = createEffect(() => this.actions$.pipe(
  //   ofType(addAlert),
  //   mergeMap(action => 
  //     action.alert.type !== AlertType.Sticky ? 
  //       of(action).pipe(delay(3000), map(action => removeAlert({id: action.alert.id}))) : 
  //       of(action).pipe(delay(0))
  //   )
  // ));

   autoRemoveAlert$ = createEffect(() => this.actions$.pipe(
    ofType(addAlert),
    mergeMap(action =>
      action.alert.type !== AlertType.Sticky ?
        of(action).pipe(
          delay(3000),
          map(() => removeAlert({id: action.alert.id}))
        ) :  EMPTY )
  ));
  
  constructor(private actions$: Actions) {}
}