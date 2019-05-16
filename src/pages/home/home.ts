import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { Platform } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title: string = 'Home'

  matches: String[];

  permission: boolean = false;

  isListening: boolean = true;

  constructor(public navCtrl: NavController,
              private plt: Platform, 
              private speech: SpeechRecognition) {

  }

  isIos() {
    // return this.plt.is('ios');
    return true;
  }

  getPermission() {
    console.log('Get permission')
  }

  startListening() {
    console.log('Start Listening')
  }

  stopListening() {
    console.log('Stop Listening')
  }

}
