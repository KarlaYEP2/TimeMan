import {Component, EventEmitter, OnDestroy, OnInit, Output} from "@angular/core";
import {NgForm} from "@angular/forms";
import {ProjectService} from "../../project.service";

@Component({
  selector: 'create-new-project',
  templateUrl: './create-new-project.component.html',
  styleUrls: ['./create-new-project.component.css']
})
export class CreateNewProjectComponent implements OnInit, OnDestroy {
  constructor(private projectService: ProjectService) {}

  @Output() close = new EventEmitter<void>()

  ngOnInit() {

  }

  ngOnDestroy(): void {
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));

  }

  onSubmit(f: NgForm) {
    this.projectService.newProject(f.value.name, f.value.hours)
    this.close.emit()

  }

  onClose() {
    this.close.emit()
  }

}
