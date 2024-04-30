import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AlertInterface } from '../../stores';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationsSubject = new BehaviorSubject<AlertInterface[]>([]);
  notifications$ = this.notificationsSubject.asObservable();
}
