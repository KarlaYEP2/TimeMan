import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ListService} from "../list.service";
import {Listing} from "../list.model";

@Component({
  selector: 'app-input-time',
  templateUrl: './input-time.component.html',
  styleUrls: ['./input-time.component.css'],
  providers: []
})
export class InputTimeComponent implements OnInit {
  arrayData:Listing[] = [];
  selected: Date | undefined;
  selectedOption!: number;
  arrayNumbers = [1,2,3,4,5,6,7,8,9,10]
  onSubmit(f: NgForm) {
    this.arrayData.push(f.value)
    this.ListService.newListing(this.arrayData)
 }

  constructor(private ListService: ListService) {}

  ngOnInit(): void {
    this.arrayData = this.ListService.listings
  }

}
