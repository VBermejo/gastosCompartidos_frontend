import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ExpenseGroup } from '../model/expense-group';


@Injectable({
  providedIn: 'root'
})
export class PayGroupService {

  private endpoint: string = 'http://localhost:8101/getByMember/';

  constructor(private http: HttpClient) { }

  getGroups(memberId: number): Observable<ExpenseGroup[]> {
    return this.http.get<ExpenseGroup[]>(this.endpoint + memberId);
  }
}
