export class Project {
  public id: string
  public name: string
  public maxHour: number


  constructor(id: string, name: string, maxHour:number) {
    this.id = id
    this.name = name
    this.maxHour = maxHour

  }
}
