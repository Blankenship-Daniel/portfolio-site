import { Directive } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Directive({
  selector: '[appAuth]'
})
export class AuthDirective {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    afAuth.authState.subscribe(
      user => {
        if (!user) {
          router.navigateByUrl('/login');
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
