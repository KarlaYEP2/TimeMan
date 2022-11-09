import {Component, Input, OnInit} from '@angular/core';
import {ListService} from "../list.service";
import {Subscription} from "rxjs";
import {Listing} from "../list.model";

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css'],
  providers: []
})
export class DataListComponent implements OnInit {
  arrayData:Listing[] = [];
  sub: Subscription | undefined

  constructor(private ListService: ListService) { }

  ngOnInit(): void {
  this.sub = this.ListService.listingUpdated.subscribe(
    (arrayData: Listing[]) => {
      this.arrayData = arrayData
      console.log(arrayData)
    }
  );
  this.arrayData = this.ListService.listings
  }

  onDeleteListing(index: number) {
    this.ListService.deleteListing(index)
  }
}
