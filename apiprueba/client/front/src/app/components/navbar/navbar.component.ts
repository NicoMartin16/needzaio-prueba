import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public status: boolean = false;

  constructor(private _authService: AuthService, private route: Router) {
   }

  ngOnInit() {
    this.revisarUser();
  }

  onLogout() {
    this._authService.logoutUser();
    this.route.navigate(['/home']);
    location.reload();
  }

  revisarUser(){
    if(this._authService.getCurrentUser() === null){
      this.status = false;
    }else{
      this.status = true;
    }
  }
}
