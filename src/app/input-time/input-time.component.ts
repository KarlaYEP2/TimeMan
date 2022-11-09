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

  onSubmit(f: NgForm) {
    this.arrayData.push(f.value)
    this.ListService.newListing(this.arrayData)
    console.log(this.arrayData)
  }

  constructor(private ListService: ListService) {}

  ngOnInit(): void {
    this.arrayData = this.ListService.listings
  }

}
