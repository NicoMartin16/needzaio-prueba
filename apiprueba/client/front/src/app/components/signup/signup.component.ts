import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formSignUp: FormGroup;
  public user: User;
  public status: string;
  constructor(private _authService: AuthService, private route: Router, private location: Location) {
    this.user = new User('', '', '', '');
    this.formSignUp = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      password: new FormControl('', Validators.required)
    });

  }

  ngOnInit() {
  }

  registrarUser() {
    this._authService.registerUser(this.user.name, this.user.email, this.user.password)
        .subscribe(
          response => {
              console.log(response);
              this.status = 'success';
              this._authService.setUser(response);
              let token = response.id;
              this._authService.setToken(token);
              this.route.navigate(['/login']);
              alert("Se ha registrado el usuario correctamente");
          },
          err => {
            console.log(err);
            this.status = 'failed';
          }
    );
  }

}
