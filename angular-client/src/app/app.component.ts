import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private afAuth: AngularFireAuth,
    private authService: AuthService) {
    let user = afAuth.authState;
    user.subscribe(user => this.authUser(user));
  }

  authUser(user: any) {
    console.log(user);
    if (user !== null) {
      console.log(user.uid);
      this.authService.authUser(user.uid).subscribe(
        authed => {
          if (authed) {
            // TODO: save uid to localstorage
            console.log('authed');
            console.log(authed);
          }
          else {
            // TODO: redirect to /home
            console.log('not authed');
            console.log(authed);
          }
        },
        err => {
          console.log(err);
        }
      )
    }
  }

  login() {
    this.afAuth.auth
      .signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
