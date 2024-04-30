import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DialogMode } from '../../models/enums/dialog.enum';

@Component({
  selector: 'lib-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogLibrary {
  @Input() mode: DialogMode | undefined;
  @Input() isOpen = false;
  @Output() _onClose = new EventEmitter<void>();

  DialogMode = DialogMode;
  getBackgroundColor(): string {
    switch (this.mode) {
      case DialogMode.login:
        return 'red';
      case DialogMode.signin:
        return 'green';
      default:
        return 'transparent';
    }
  }

  closeDialog() {
    this._onClose.emit();
  }
}
