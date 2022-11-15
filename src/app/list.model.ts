export class Listing {
  public id: string
  public hours: number
  public desc: string

  constructor(id: string, hours: number, desc:string) {
    this.id = id
    this.hours = hours
    this.desc = desc
  }
}
