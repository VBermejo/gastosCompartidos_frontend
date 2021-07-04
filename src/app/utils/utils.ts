export default class Utils {    

  static formatAmount(amount: number): string {
    if (amount) {
      return amount.toLocaleString("es-ES", { maximumFractionDigits: 2, minimumFractionDigits: 2 }) + " €";
    } else {
      return "";
    }
  } 

  static getDurationStr(date: string): string {
    let result: string = "";
    if (date) {
        result = "Hace " + this.getTimeElapsed(new Date(date), new Date());      
    } 
    return result;
  } 

  //FIXME refactorizar e internacionalizar
  static getTimeElapsed(date1: Date, date2: Date): string {
    let seconds = Math.floor((date2.getTime() - (date1.getTime()))/1000);
    if (seconds < 60) {
      return seconds + " seg";
    } 
    let minutes = Math.floor(seconds/60);
    if (minutes < 60) {
      return minutes + " min";
    }
    let hours = Math.floor(minutes/60);
    if (hours < 24) {
      return hours + " horas"
    }
    let days = Math.floor(hours/24);
    if (days == 1) {
      return days + " día"
    } else {
      return days + " días"
    }
  }
}