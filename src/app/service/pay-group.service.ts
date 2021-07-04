import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ExpenseGroup } from '../model/expense-group';
import { Member } from '../model/member';

const PATH: string = 'http://localhost:8101';

@Injectable({
  providedIn: 'root'
})
export class PayGroupService {

  private getGroupsEndpoint: string = `${PATH}/getByMember`;
  private createMemberEndpoint: string = `${PATH}/createMemberAndAddToGroup`;
  private getGroupMembersEndpoint: string = `${PATH}/getGroupMembersEndpoint`;

  private httpHeaders = new HttpHeaders({"Content-Type": "application/json"});

  constructor(private http: HttpClient) { }

  getGroups(memberId: number): Observable<ExpenseGroup[]> {
    return this.http.get<ExpenseGroup[]>(`${this.getGroupsEndpoint}/${memberId}`);
  }

  createMemberAndAddToGroup(groupId: number, member: Member): Observable<Member> {
    return this.http.post<Member>(`${this.createMemberEndpoint}/${groupId}`, member, {headers: this.httpHeaders});
  }

  getGroupMembers(groupId: number) : Observable<Member[]> {
    return this.http.get<Member[]>(`${this.getGroupMembersEndpoint}/${groupId}`);

  }
}
