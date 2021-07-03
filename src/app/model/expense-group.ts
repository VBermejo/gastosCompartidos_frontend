import { Payment } from "./payment";

export class ExpenseGroup {

    constructor(public id:number, public name: string,  public creationDate: string, public payments: Payment[]) {  }

}
