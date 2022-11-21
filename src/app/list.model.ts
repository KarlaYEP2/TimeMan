export class Listing {
  public id: string
  public hours: number
  public desc: string
  public date: Date

  constructor(id: string, hours: number, desc:string, date: Date) {
    this.id = id
    this.hours = hours
    this.desc = desc
    this.date = date
  }
}
