import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  private baseUrl = "http://localhost:8080/user/login"

  constructor(private httpClient: HttpClient) { }

  userLogin(user: User):Observable<object>{
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}`, user);
  }

}
