import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import * as firebase from 'firebase';
/*
  Generated class for the DbProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DbProvider {

  constructor(private angularfire: AngularFire) {
    console.log('Hello DbProvider Provider');
  }
getAlumnoConectado(){
  return this.angularfire.database.object('/alumnos/' + firebase.auth.currentUser.uid);
}
getAlumno(alumnoId){
	return this.angularfire.database.object('/alumnos/' + alumnoId);
}
getAlumnoClases() {
	return this.angularfire.database.list('/clases', {
		query:{
         orderByChild: 'alumnoId',
         equalTo: firebase.auth().currentUser.uid
		}
	});
}

}
