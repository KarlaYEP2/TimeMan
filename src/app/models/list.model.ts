export class Listing {
  public id: string
  public hours: number
  public desc: string
  public date: Date
  public projectId: string

  constructor(id: string, hours: number, desc:string, date: Date, projectId: string) {
    this.id = id
    this.hours = hours
    this.desc = desc
    this.date = date
    this.projectId = projectId
  }
}
