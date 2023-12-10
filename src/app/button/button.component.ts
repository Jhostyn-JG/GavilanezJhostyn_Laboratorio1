import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Output() clickBoton = new EventEmitter<void>();

  onClick() {
    this.clickBoton.emit();
  }
}
