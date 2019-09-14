import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public url: string;
  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:3000/api/Users/';
  }
  header: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  registerUser (name: string, email: string, password: string){
    return this.http.post<User>(this.url, {name, email, password}, {headers: this.header});
  }
  loginUser(email: string, password: string){
    return this.http.post<User>(this.url+"login?include=user",{email, password}, {headers: this.header})
  }
  
  setUser(user: User) {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  setToken(token) {
    localStorage.setItem("accessToken", token);
  }

  getToken() {
    return localStorage.getItem("accessToken");
  }
  getCurrentUser(): User {
    let user_string = localStorage.getItem("currentUser");
    if(!isNullOrUndefined(user_string)){
      let user: User = JSON.parse(user_string);
      return user;
    }else {
      return null;
    }
  }

  logoutUser() {
    const accessToken = localStorage.getItem('accessToken');
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    return this.http.post(this.url+ "/logout?access_token="+ accessToken, {headers: this.header});
  }
}
