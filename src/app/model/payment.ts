import { Member } from './member';

export class Payment {

    constructor(public id:number, public amount: number, public description: string,  public creationDate: string, public payer: Member) {  }

}
