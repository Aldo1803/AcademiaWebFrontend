import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  apiUri = 'http://24.199.71.95:3000/api/';

  public token: string | null = null;
  constructor(private http: HttpClient) { 

  }

  getCourses(): Observable<any> {
    this.token = localStorage.getItem('token');
    const headers : HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.token}`
    });

    return this.http.get(this.apiUri + 'courses', { headers });

  }

  getCourse(id: string): Observable<any> {
    this.token = localStorage.getItem('token');
    const headers : HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.token}`
    });

    return this.http.get(this.apiUri + 'courses/' + id, { headers });

  }

  getLesson(id: string): Observable<any> {
    this.token = localStorage.getItem('token');
    const headers : HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.token}`
    });

    return this.http.get(this.apiUri + 'lessons/' + id, { headers });

  }


}
