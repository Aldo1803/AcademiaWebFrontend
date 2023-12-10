import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  apiUri = 'http://24.199.71.95:3000/api/';

  public token: string | null = null;

  constructor(private http: HttpClient) { }

  getChats(): Observable<any> {
    this.token = localStorage.getItem('token');
    const headers : HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.token}`
    });

    return this.http.get(this.apiUri + 'chats', { headers });

  }

  getChat(id: string): Observable<any> {
    this.token = localStorage.getItem('token');
    const headers : HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.token}`
    });

    return this.http.get(this.apiUri + 'chats/' + id, { headers });

  }

  deleteChat(id: string): Observable<any> {
    this.token = localStorage.getItem('token');
    const headers : HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.token}`
    });

    return this.http.delete(this.apiUri + 'chats/' + id, { headers });

  }

  createChat(): Observable<any> {
    this.token = localStorage.getItem('token');
    const headers : HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.token}`
    });

    return this.http.post(this.apiUri + 'chats', {}, { headers });

  }

  createMessage(chatId: string, prompt: string): Observable<any> {
    this.token = localStorage.getItem('token');
    const headers : HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.token}`
    });

    return this.http.post(this.apiUri + 'chats/' + chatId , { prompt }, { headers });

  }








}
