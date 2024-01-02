import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppUserService {

  constructor(private httpClient : HttpClient) { }
  private baseUrl = "http://localhost:8080/auth";

  login(username: string, password: string): Observable<any> {
    const loginData = { username, password };
    return this.httpClient.post(`${this.baseUrl}/login`, loginData);
  }
}
