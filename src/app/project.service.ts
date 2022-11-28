import {Injectable} from "@angular/core";
import {Project} from "./models/project.model";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Subject} from "rxjs";

@Injectable({providedIn: "root"})
export class ProjectService {
  private projects: Project[] = [];


  constructor(private http: HttpClient) {
  }

  private string = ''
  projectUpdated = new Subject<Project[]>();

  updateProjectListener() {
    this.getProjects()
    return this.projectUpdated.asObservable()
  }

  newProject(name: string, maxHour: number) {
    const project: Project = {id: this.string, name: name, maxHour: maxHour}
    this.http.post<{ message: string }>('http://localhost:3000/api/projects', project)
      .subscribe((responseData) => {
        this.projects.push(project);
        this.projectUpdated.next([...this.projects]);
      }, error => {
        console.log(error)
      })
  }

  getProjects() {
    this.http.get<{ message: string, project: any }>('http://localhost:3000/api/projects'
    )
      .pipe(map((projectData) => {
        return projectData.project.map((project: { _id: string, name: string, maxHour: number }) => {
          return {
            id: project._id,
            name: project.name,
            maxHour: project.maxHour
          }
        })
      }))
      .subscribe((projectData) => {
        this.projects = projectData
        this.projectUpdated.next([...this.projects])
      })
  }

  getProjectName(name: string) {
    return this.projects.find(
      (s) => {
        return s.name === name
      }
    )
  }

}
