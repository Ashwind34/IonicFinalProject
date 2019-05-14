import { Component, Input, ViewChild } from '@angular/core';
import { UserserviceProvider } from '../../providers/userservice/userservice';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { DeclareFunctionStmt } from '@angular/compiler';

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
    this.navCtrl.setRoot(HomePage)
    this.userServ.isLoggedIn = true;
    console.log(this.userServ.isLoggedIn)
    console.log('Username: ' + this.userServ.user.username)
    console.log('Password: ' + this. userServ.user.password)
  }  

  registerNav(){
    this.userServ.registerUser();
    this.goToHome();
  }

  loginNav() {

  }

}
