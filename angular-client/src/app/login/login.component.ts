import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private authed: boolean;
  private loginForm: FormGroup;
  private user: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    private location: Location,
    private router: Router
  ) {
    this.authed = false;
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {}

  login(form) {
    console.log(form);
    this.afAuth.auth.
      signInWithEmailAndPassword(form.email, form.password)
        .then(success => {
          this.location.back();
        })
        .catch(error => {
          console.log(error);
        });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
