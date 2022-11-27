import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProjectService} from "../project.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Listing} from "../models/list.model";
import {Project} from "../models/project.model";

@Component({
  selector: 'app-select-page',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.css']
})
export class SelectPageComponent implements OnInit, OnDestroy {
  sub!: Subscription
  projectList: Project[] = []

  constructor(private projectService: ProjectService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sub = this.projectService.updateProjectListener().subscribe(
      (projectData: Project[]) => {
        console.log(projectData)
        this.projectList = projectData
      }
    )
  }


  newProject() {
    console.log(this.route)
    this.router.navigate(['/:name'], {relativeTo: this.route})
    // this.projectService.newProject('NewRUn', 213)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
