import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';


const PATH: string = 'http://10.9.56.187:8110';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpHeaders = new HttpHeaders({"Content-Type": "application/json"});
  
  private loginEndpoint: string = `${PATH}/login`;

  constructor(private httpClient: HttpClient) { }

  login(user: User) : Observable<number> {
    return this.httpClient.post<number>(`${this.loginEndpoint}`, user, {headers: this.httpHeaders});
  }
}
