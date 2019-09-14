import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root' 
})
export class DataService {
  public url: string;
  constructor(private http: HttpClient, private _authService: AuthService) { 
    this.url = "http://localhost:3000/api/";
  }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: this._authService.getToken()
  });
  getUsuarios(): Observable<any> {
    let token = this._authService.getToken();
    return this.http.get(this.url+"usuarios?access_token="+ token, {headers: this.headers})
    .pipe(map(data => data));
  }

  guardarUsuarios(usuario): Observable<any> {
    return this.http.post(this.url + "usuarios", usuario, { headers: this.headers});
  }
}
