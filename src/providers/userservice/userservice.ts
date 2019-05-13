import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserserviceProvider {

  isLoggedIn: boolean = false;

  user: any = {
    username: '',
    password: ''
  }

  constructor(public http: HttpClient) {
    console.log('Hello UserserviceProvider Provider');
  }

  emptyLogin() {
    this.isLoggedIn = false
    this.user = {
      username: '',
      password: ''
    }  
  }

}
