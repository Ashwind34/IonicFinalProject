import { Component } from '@angular/core';

/**
 * Generated class for the UserformComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'userform',
  templateUrl: 'userform.html'
})
export class UserformComponent {

  text: string;

  constructor() {
    console.log('Hello UserformComponent Component');
    this.text = 'Hello World';
  }

}
