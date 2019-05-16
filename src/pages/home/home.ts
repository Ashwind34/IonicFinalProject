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

  options = {
    language: 'en-US',
    matches: 1
  }

  isIos: boolean;

  constructor(public navCtrl: NavController,
              private plt: Platform, 
              private speech: SpeechRecognition) {

  this.iosCheck();

  }

  iosCheck() {
    this.isIos = this.plt.is('ios');
    // return true;
  } 

  // ALL METHODS NOT WORKING ON DESKTOP OR IONIC DEVAPP - CORDOVA PLUGIN NOT COMPATIBLE WITH IONIC DEVAPP

  getPermission() {
    console.log('Get permission')
    console.log(this.isIos);
    this.speech.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speech.requestPermission();
        }
      });
  }

  beginListening(options) {
    this.options = options;
    console.log('Start Listening')
    this.speech.startListening().subscribe(matches => {
      this.matches = matches;
    });
    this.isListening = true;
    console.log(this.isListening);
  }
 
  endListening() {
    console.log('Stop Listening')
    this.speech.stopListening().then(() => {
      this.isListening = false;
      console.log(this.isListening);
    });
  }
  

}
