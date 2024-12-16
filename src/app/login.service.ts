import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8080/app/auth/login'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, data);
  }
}
