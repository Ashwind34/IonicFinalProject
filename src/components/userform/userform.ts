import { Component, Input, ViewChild } from '@angular/core';
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
    console.log('Password: ' + this. userServ.user.password)
  }

  // ANGULAR LOGIN SAMPLE

  // constructor(private router: Router, public userApi: UserService) { }

  // title = 'Stock Info App PART DEUX';

  // loginData: any =
  // {
  //   email: '',
  //   password : ''
  // };

  // user;

  // token;

  // errorMessage;

  // loginUser() {
  //   this.user = '';
  //   this.errorMessage = '';
  //   this.userApi.userLogin(this.loginData)
  //   .subscribe(
  //     (response: any) => {
  //       this.user = response;
  //       console.log(this.user);
  //       sessionStorage.setItem('token', response.token);
  //       sessionStorage.setItem('userId', response.userId);
  //     }, error => {
  //       this.errorMessage = error.status;
  //       console.log('Error Status Code: ' + this.errorMessage);
  //       console.log(error);
  //     }, () => {
  //         if (!this.errorMessage) {
  //           this.router.navigate(['/main']);
  //         }
  //     }
  //   );
  // }

  // toRegister() {
  //   this.router.navigate(['/register']);

  // }

  // ngOnInit() {
  //   console.log(sessionStorage.getItem('token'))
  //   this.token = sessionStorage.getItem('token')
  //   console.log('Token Property ' + this.token)
  // }

  // --------------------------------------------------

  // ANGULAR REGISTER SAMPLE

  // constructor(private router: Router, public userApi: UserService) { }

  // userData: any =
  // {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password : ''
  // };

  // user;

  // errorMessage;

  // registerUser() {
  //   this.user = '';
  //   this.errorMessage = '';
  //   this.userApi.userRegister(this.userData)
  //   .subscribe(
  //     (response: any) => {
  //       this.user = response;
  //       sessionStorage.setItem('token', response.token);
  //       sessionStorage.setItem('userId', response.userId);
  //     }, error => {
  //       this.errorMessage = error.status;
  //       console.log('Error Status Code: ' + this.errorMessage);
  //       console.log(error);
  //     }, () => {
  //         if (!this.errorMessage) {
  //           this.router.navigate(['/main']);
  //         }
  //     }
  //   );
  // }

  // ngOnInit() {
  // }

}
