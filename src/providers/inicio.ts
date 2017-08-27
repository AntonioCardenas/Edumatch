import { Injectable,NgZone } from '@angular/core';
import * as firebase from 'firebase';
import { Inicio } from '../inicio';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Injectable()
export class InicioProvider {
	private navCtrl: NavController;

  constructor(public zone: NgZone) {
    console.log('Hello InicioProvider Provider');
  }

}
