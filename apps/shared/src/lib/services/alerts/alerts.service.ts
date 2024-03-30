import { Injectable } from "@angular/core";
import { AlertInterface, TranslationService } from "@lib/shared";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  private notificationsSubject = new BehaviorSubject<AlertInterface[]>([]);
  notifications$ = this.notificationsSubject.asObservable();
  constructor(private translationService: TranslationService) { }
  
}