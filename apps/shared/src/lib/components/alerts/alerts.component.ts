import { AsyncPipe, NgClass, NgFor, NgIf } from "@angular/common";
import { Component, inject } from "@angular/core";
import { AlertFacade, AlertType, TranslatePipe } from "@lib/shared";
@Component({
  selector: "lib-alerts",
  standalone: true,
  templateUrl: "alerts.component.html",
  styleUrls: ["alerts.component.scss"],
  imports: [NgFor, AsyncPipe, NgIf, NgClass, TranslatePipe],
})
export class AlertsLibrary {
  private readonly alertFacade = inject(AlertFacade);
  AlertType = AlertType;
  alerts$ = this.alertFacade.alerts$;

  getAlertClass(type: AlertType): string {
    switch (type) {
      case AlertType.Success:
        return "alert success";
      case AlertType.Warning:
        return "alert warning";
      case AlertType.Error:
        return "alert error";
      case AlertType.Info:
        return "alert info";
      case AlertType.Sticky:
        return "alert sticky";
      default:
        return "alert";
    }
  }

  removeAlert(id: number): void {
    this.alertFacade.removeAlert(id);
  }
}
