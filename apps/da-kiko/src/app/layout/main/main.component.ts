import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import {
  AlertFacade,
  AlertsComponent,
  AlertType,
  TranslatePipe,
} from "@lib/shared";

@Component({
  standalone: true,
  selector: "kiko-layout-main",
  templateUrl: "./main.component.html",
  imports: [TranslatePipe, CommonModule, AlertsComponent],
})
export class LayoutMainComponent {
  private readonly alertFacade = inject(AlertFacade);
  AlertType = AlertType;
  addAlert(message: string, type: AlertType): void {
    this.alertFacade.addAlert(message, type);
  }
}
