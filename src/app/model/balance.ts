import { Member } from './member';

export class Balance {

    constructor(public id: number, public member: Member, public amount: number,  public creationDate: string) {  }

}
