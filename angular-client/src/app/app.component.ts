import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

// Import rxjs map operator
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  // Link to our api, pointing to localhost
  API = 'http://localhost:3000';

  constructor(private http: Http) {}

  ngOnInit() {
    this.getAllPeople();
  }

  // Add one person to the API
  addPerson(name, age) {
    /** Keeping reference
    this.http.post(`${this.API}/users`, {name, age})
      .map(res => res.json())
      .subscribe(() => {
        this.getAllPeople();
      }, error => console.log(error))
    */    
  }

  // Get all users from the API
  getAllPeople() {
    this.http.get(`${this.API}/`)
      .map(res => res.json())
      .subscribe(people => {
        console.log(people)
      }, error => console.log(error))
  }
}
