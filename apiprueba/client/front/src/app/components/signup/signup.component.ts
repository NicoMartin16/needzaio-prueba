import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public user: User = {
     name: "",
     email: "",
     password: ""
  }
  constructor(private _authService: AuthService, private route: Router) { }

  ngOnInit() {
  }

  registrarUser(form) {
    this._authService.registerUser(this.user.name, this.user.email, this.user.password)
        .subscribe(
          response => {
              console.log(response);
              this._authService.setUser(response);
              let token = response.id;
              this._authService.setToken(token);
              this.route.navigate(['/list']);
          },
          err => {
            console.log(err);
          }
    );
  }

  onSubmit(form) {

  }

}
