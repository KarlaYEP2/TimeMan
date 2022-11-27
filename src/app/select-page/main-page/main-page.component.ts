import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ProjectService} from "../../project.service";
import {Project} from "../../models/project.model";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  project!: { maxHour: number; name: string }
  name!: string

  constructor(private route: ActivatedRoute, private projectService: ProjectService, private router: Router) {
  }

  ngOnInit(): void {
    const name = this.route.snapshot.params['name']
    this.name = this.route.snapshot.params['name']
    this.project = this.projectService.getProjectName(name)
    this.route.params.subscribe(
      // takes name data from project service and compares it with the URL
      (params: Params) => {
        console.log(params['name'])
        this.project = this.projectService.getProjectName(params['name'])
        if (!this.project) {
          this.router.navigate(['projects']);
        }
      }
    )
    console.log(this.project.maxHour)
  }
}
