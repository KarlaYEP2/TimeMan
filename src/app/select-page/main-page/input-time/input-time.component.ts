import {Component, Input} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ListService} from "../../../list.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-input-time',
  templateUrl: './input-time.component.html',
  styleUrls: ['./input-time.component.css'],
  providers: []
})
export class InputTimeComponent {
  @Input() projectId!: string
  selected: Date | undefined;
  arrayNumbers = [1,2,3,4,5,6,7,8,9,10]

  onSubmit(f: NgForm) {
    if (f.invalid) {
      return;
    }
    this.ListService.newListing(f.value.hours,f.value.desc, f.value.date, this.projectId)
    f.resetForm()
 }

  onNavigate() {
    this.router.navigate(['list'])
  }

  constructor(private ListService: ListService, private router: Router, private route: ActivatedRoute) {}



}
