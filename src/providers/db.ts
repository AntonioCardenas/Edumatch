import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class DbProvider {

  constructor(public angularfireDatabase: AngularFireDatabase) {
    console.log('Hello DbProvider Provider');
  }
getAlumnoConectado(){
  return this.angularfireDatabase.object('/alumnos/' + firebase.auth().currentUser.uid);
}
getAlumno(alumnoId){
	return this.angularfireDatabase.object('/alumnos/' + alumnoId);
}
getAlumnoClases() {
	return this.angularfireDatabase.list('/clases', {
		query:{
         orderByChild: 'alumnoId',
         equalTo: firebase.auth().currentUser.uid
		}
	});
}

}
