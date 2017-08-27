import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InicioProvider } from '../../providers/inicio'

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
	private mode: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public InicioProvider: InicioProvider) {
     this.InicioProvider.setNavController(this.navCtrl);
  }

  ionViewDidLoad() {
  }

}
