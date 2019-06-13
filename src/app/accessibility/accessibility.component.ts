import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.component.html',
  styleUrls: ['./accessibility.component.css']
})
export class AccessibilityComponent {
  @Output() colorSelected = new EventEmitter();

  selectColor(event) {
    this.colorSelected.emit(event.target.value);
  }
}
