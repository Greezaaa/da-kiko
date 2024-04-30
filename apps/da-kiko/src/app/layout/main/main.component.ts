import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AlertFacade, AlertsLibrary, AlertType } from '@lib/shared';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'kiko-layout-main',
  templateUrl: 'main.component.html',
  imports: [CommonModule, AlertsLibrary, TranslateModule],
})
export class LayoutMainComponent {
  private readonly alertFacade = inject(AlertFacade);
  AlertType = AlertType;
  addAlert(message: string, type: AlertType): void {
    this.alertFacade.addAlert(message, type);
  }
}
