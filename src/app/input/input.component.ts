import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() textoEntrada: string = '';
  @Output() textoEntradaChange = new EventEmitter<string>();

  onInputChange(newValue: string) {
    this.textoEntrada = newValue;
    this.textoEntradaChange.emit(newValue);
  }
}
