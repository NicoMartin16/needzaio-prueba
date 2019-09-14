import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User;
  public status: string;
  formularioLogin: FormGroup;
  constructor(private _authService: AuthService, private route: Router, private location: Location) {
    this.user = new User('', '', '', '');
    this.formularioLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      password: new FormControl('', Validators.required)
    });
    
  }
  ngOnInit() {
  }
  onLogin(){
    return this._authService.loginUser(this.user.email, this.user.password)
      .subscribe(response => {
        this.status="success";
        this._authService.setUser(response.user);
        const token = response.id;
        this._authService.setToken(token);
        this.route.navigate(['/list']);
        this.location.replaceState('/list');
        location.reload();
      },
      err => {
        this.status = "failed";
      }
    );
  }

}
