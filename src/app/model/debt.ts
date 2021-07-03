import { Member } from './member';

export class Debt {

    constructor(public from: Member, public to: Member,  public cash: number) {  }

}
