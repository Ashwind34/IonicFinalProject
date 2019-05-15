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

  constructor(public userServ: UserserviceProvider, public navCtrl: NavController) { }

  goToHome() {
    this.navCtrl.setRoot(HomePage)
  }  

  //CONSIDER RE-FACTORING TO INCLUDE ONLY ONE METHOD THAT TAKES USERSERV.LOGIN() OR USERSERV.REGISTER() AS AN ARGUMENT

  registerUser() { 
    this.errorMessage = '';
    this.userServ.register()
    .subscribe(
      (response: any) => {
        this.userApiResponse = response;
        this.userServ.isLoggedIn = true;
        sessionStorage.setItem('token', response.token);
        // MAY NOT NEED TO STORE USERID IN SESSIONSTORAGE
        sessionStorage.setItem('userId', response.userId);
        this.userServ.token = sessionStorage.getItem('token')
      }, error => {
        this.errorMessage = 'Error Status Code: ' + error.status + ' (' + error.statusText + ')';
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
        sessionStorage.setItem('token', response.token);
        // MAY NOT NEED TO STORE USERID IN SESSIONSTORAGE
        sessionStorage.setItem('userId', response.userId);
        this.userServ.token = sessionStorage.getItem('token')
        console.log(this.userServ.token)
      }, error => {
        this.errorMessage = 'Error Status Code: ' + error.status + ' (' + error.statusText + ')';
      }, () => {
        if (!this.errorMessage) {
          this.goToHome()
        }
      }
    );
  }
}
