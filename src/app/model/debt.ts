import { Member } from './member';
import  Utils  from "../utils/utils";

export class Debt {

    constructor(public from: Member, public to: Member,  public cash: number) {  }
}
