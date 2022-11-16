export class Listing {
  public id: string
  public hours: number
  public desc: string
  public date: any

  constructor(id: string, hours: number, desc:string, date: any) {
    this.id = id
    this.hours = hours
    this.desc = desc
    this.date = date
  }
}
