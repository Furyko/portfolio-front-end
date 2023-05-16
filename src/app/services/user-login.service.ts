import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  private baseUrl = `${environment.url}/user/login`

  constructor(private httpClient: HttpClient) { }

  userLogin(user: User):Observable<object>{
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}`, user);
  }

}
