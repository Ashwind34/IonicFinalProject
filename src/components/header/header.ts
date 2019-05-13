import { Component, Input } from '@angular/core';


@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  @Input() title: string;

  constructor() {
    console.log('Hello HeaderComponent Component');
  }

}
