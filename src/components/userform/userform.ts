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
    this.navCtrl.setRoot(HomePage)
    this.userServ.isLoggedIn = true;
    console.log(this.userServ.isLoggedIn)
    console.log('Username: ' + this.userServ.user.username)
    console.log('Password: ' + this.userServ.user.password)
  }  

  registerUser() { 
    this.userServ.errorMessage = '';
    this.userServ.register()
    .subscribe(
      (response: any) => {
        this.userServ.user = response;
        console.log(this.userServ.user);
        this.userServ.user = {};
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('userId', response.userId);
        this.userServ.token = sessionStorage.getItem('token')
        console.log(this.userServ.token)
      }, error => {
        this.userServ.errorMessage = error.status;
        console.log('Error Status Code: ' + this.userServ.errorMessage);
        console.log(error);
      }, () => {
        if (!this.userServ.errorMessage) {
          this.goToHome()
        }
      }
    );
  }

  loginUser() {
    this.userServ.errorMessage = '';
    this.userServ.login()
    .subscribe(
      (response: any) => {
        this.userServ.user = response;
        console.log(this.userServ.user);
        this.userServ.user = '';
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('userId', response.userId);
        this.userServ.token = sessionStorage.getItem('token')
        console.log(this.userServ.token)
      }, error => {
        this.userServ.errorMessage = 'Error Status Code: ' + error.status;
        console.log(this.userServ.errorMessage);
        console.log(error);
      }, () => {
        if (!this.userServ.errorMessage) {
          this.goToHome()
        }
      }
    );
  }
}
