import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserserviceProvider {

  userUrl: string = 'http://localhost:3000/api/appUsers'

  isLoggedIn: boolean = false;

  token;

  errorMessage;

  user: any = {
    email: '',
    password: ''
  }

  constructor(public http: HttpClient) {
    console.log('Hello UserserviceProvider Provider');
  }

  register() {
    return this.http.post(this.userUrl, this.user)
  }

  login() {
    return this.http.post(this.userUrl + '/login/', this.user)
  }

  emptyLogin() {
    this.isLoggedIn = false
    this.user = {
      username: '',
      password: ''
    }  
  }

  // NEXT STEPS 
  
  // 1) DISCUSS IONIC STORAGE VS SESSION STORAGE
  // 2) MOVE ALL LOGIN AND REGISTER FUNCTIONS (AND goToHome()) TO SERVICE 
  // 3) MERGE LOGIN AND REGISTER FUNCTIONS 
  // 4) RE-FACTOR WITH IONIC SYNTAX 
  // 5) TEST APP AGAINST LIVE DB

  // loginUser() {
  //   //this.user = '';
  //   this.errorMessage = '';
  //   this.login()
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
  //     }
  //   );
  // }


  // ngOnInit() {
  //   console.log(sessionStorage.getItem('token'))
  //   this.token = sessionStorage.getItem('token')
  //   console.log('Token Property ' + this.token)
  // }

  // --------------------------------------------------

  registerUser() {
    // this.user = '';
    this.errorMessage = '';
    this.register()
    .subscribe(
      (response: any) => {
        this.user = response;
        console.log(this.user);
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('userId', response.userId);
        this.token = sessionStorage.getItem('token')
        console.log(this.token)
      }, error => {
        this.errorMessage = error.status;
        console.log('Error Status Code: ' + this.errorMessage);
        console.log(error);
      }
    );
  }

}
