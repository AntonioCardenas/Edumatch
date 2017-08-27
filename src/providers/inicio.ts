import { Injectable,NgZone } from '@angular/core';
import * as firebase from 'firebase';
import { Inicio } from '../inicio';
import { NavController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { OauthCordova } from 'ng2-cordova-oauth/platform/cordova';

@Injectable()
export class InicioProvider {
  private oauth: OauthCordova;
  private navCtrl: NavController;

  constructor(public zone: NgZone, public googlePlus: GooglePlus) { 
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
            if (user["emailVerified"]) {
              this.zone.run(() => {
                this.navCtrl.setRoot(Inicio.homePage, { animate: true });
              });
            } else {
              this.navCtrl.setRoot(Inicio.homePage, { animate: true });
            }
          } else {
            this.zone.run(() => {
              this.navCtrl.setRoot(Inicio.homePage, { animate: true });
            });
          }
        });
  }

    googleInicio() {
    this.googlePlus.Inicio({
      'webClientId': Inicio.googleClientId
    }).then((success) => {
      let credential = firebase.auth.GoogleAuthProvider.credential(success['idToken'], null);
      firebase.auth().signInWithCredential(credential)
        .then((success) => {
        })
        .catch((error) => {
          let code = error["code"];
        });
    }).catch((error) => {
      alert(error);
    });
  }
  setNavController(navCtrl) {
    this.navCtrl = navCtrl;
  }
  inicioInvitado() {
    firebase.auth().signInAnonymously()
      .then((success) => {
      })
      .catch((error) => {
        let code = error["code"];
      });
  }

}
