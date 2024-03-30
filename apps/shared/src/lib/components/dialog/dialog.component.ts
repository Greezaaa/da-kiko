import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogMode } from '@lib/shared';

@Component({
  selector: 'lib-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogLibrary implements OnInit {
  @Input() mode: DialogMode | undefined;
  @Input() isOpen: boolean = false;
  @Output() onClose = new EventEmitter<void>();

  DialogMode = DialogMode;
  ngOnInit(): void {}
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
    this.onClose.emit();
  }
}
