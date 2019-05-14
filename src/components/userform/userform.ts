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

  userApiResponse;

  errorMessage;

  constructor(public userServ: UserserviceProvider, public navCtrl: NavController) {
    console.log('Hello UserformComponent Component');
  }

  goToHome() {
    this.navCtrl.setRoot(HomePage)
  }  

  registerUser() { 
    this.errorMessage = '';
    this.userServ.register()
    .subscribe(
      (response: any) => {
        this.userApiResponse = response;
        this.userServ.isLoggedIn = true;
        console.log(this.userServ.user);
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('userId', response.userId);
        this.userServ.token = sessionStorage.getItem('token')
        console.log(this.userServ.token)
      }, error => {
        this.errorMessage = 'Error Status Code: ' + error.status + ' (' + error.statusText + ')';
        console.log(this.errorMessage);
        console.log(error);
      }, () => {
        if (!this.errorMessage) {
          this.goToHome()
        }
      }
    );
  }

  loginUser() {
    this.errorMessage = '';
    this.userServ.login()
    .subscribe(
      (response: any) => {
        this.userApiResponse = response;
        this.userServ.isLoggedIn = true;
        console.log(this.userServ.user);
        //this.userServ.user = '';
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('userId', response.userId);
        this.userServ.token = sessionStorage.getItem('token')
        console.log(this.userServ.token)
      }, error => {
        this.errorMessage = 'Error Status Code: ' + error.status + ' (' + error.statusText + ')';
        console.log(this.errorMessage);
        console.log(error);
      }, () => {
        if (!this.errorMessage) {
          this.goToHome()
        }
      }
    );
  }
}
