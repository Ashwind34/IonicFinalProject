import { Component, Input } from '@angular/core';
import { UserserviceProvider } from '../../providers/userservice/userservice';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'userform',
  templateUrl: 'userform.html',
  providers: [UserserviceProvider]
})
export class UserformComponent {

  @Input() title: string;

  constructor(public userServ: UserserviceProvider, public navCtrl: NavController) {
    console.log('Hello UserformComponent Component');
  }

  goToHome() {
    this.navCtrl.push(HomePage)
    this.userServ.isLoggedIn = true;
    console.log(this.userServ.isLoggedIn)
    console.log('Username: ' + this.userServ.user.username)
    console.log('Password: ' + this. userServ.user.password)
  }

}
