import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Debt } from '../model/debt';

@Injectable({
  providedIn: 'root'
})
export class DebtsService {

  private endpoint: string = 'localhost:8104/getDebts/';

  constructor(private http: HttpClient) { }

  getByGroup(groupId: number): Observable<Debt[]> {
    return this.http.get<Debt[]>(this.endpoint + groupId);
  }
}