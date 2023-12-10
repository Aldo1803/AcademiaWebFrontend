import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUri = 'http://24.199.71.95:3000/api/';
  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(this.apiUri + 'login', data);
  }

  register(data: any): Observable<any> {
    return this.http.post(this.apiUri + 'register', data);
  }
}
