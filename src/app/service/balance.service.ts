import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Balance } from '../model/balance';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  private endpoint: string = 'localhost:8104/calculateBalance/';

  constructor(private http: HttpClient) { }

  calculate(groupId: number): Observable<Balance[]> {
    return this.http.get<Balance[]>(this.endpoint + groupId);
  }
}
