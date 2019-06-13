import { Component } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class AppBaseComponent {
  title = 'Academia Angular';
  color;

  selectColor(color) {
    this.color = color;
  }
}
