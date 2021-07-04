import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../model/member';


const PATH: string = 'http://10.9.56.187:8102';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }
  
  private getByUserEndpoint: string = `${PATH}/getByUser`;
  private httpHeaders = new HttpHeaders({"Content-Type": "application/json"});


  getByUser(userId: number): Observable<Member> {
    return this.http.get<Member>(`${this.getByUserEndpoint}/${userId}`);
  }

}
