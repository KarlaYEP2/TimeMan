import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ListService} from "../../list.service";
import {Listing} from "../../list.model";
import {Router} from "@angular/router";
import {DatePipe, formatDate} from "@angular/common";

@Component({
  selector: 'app-input-time',
  templateUrl: './input-time.component.html',
  styleUrls: ['./input-time.component.css'],
  providers: []
})
export class InputTimeComponent {

  testDate = new DatePipe('en-US').transform(new Date(), 'yyyy-MM-dd')
  selected: Date | undefined;
  selectedOption!: number;
  arrayNumbers = [1,2,3,4,5,6,7,8,9,10]
  onSubmit(f: NgForm) {
    console.log(f.value)
    if (f.invalid) {
      return;
    }
    this.ListService.newListing(f.value.hours,f.value.desc, f.value.date)
    f.resetForm()
 }

  onNavigate() {
    this.router.navigate(['list'])
  }

  constructor(private ListService: ListService, private router: Router) {}



}
