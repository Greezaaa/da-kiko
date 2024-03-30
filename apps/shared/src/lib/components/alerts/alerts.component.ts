import { AsyncPipe, NgClass, NgFor, NgIf } from "@angular/common";
import { Component, inject } from "@angular/core";
import { AlertFacade, AlertType } from "@lib/shared";

@Component({
  selector: "lib-alerts",
  standalone: true,
  templateUrl: "alerts.component.html",
  styleUrls: ["alerts.component.scss"],
  imports: [NgFor, AsyncPipe, NgIf, NgClass],
})
export class AlertsComponent {
  AlertType = AlertType;
  private readonly alertFacade = inject(AlertFacade);

  alerts$ = this.alertFacade.alerts$;
  getAlerts$ = this.alertFacade.getAlerts$

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
