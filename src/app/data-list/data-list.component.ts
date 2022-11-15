import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ListService} from "../list.service";
import {Subscription} from "rxjs";
import {Listing} from "../list.model";

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css'],
  providers: []
})
export class DataListComponent implements OnInit, OnDestroy {
  arrayData:Listing[] = [];
  sub: Subscription | undefined
  onChange: boolean | undefined
  i!: number


  constructor(private ListService: ListService) { }



  ngOnInit() {
    this.ListService.getListings()
    this.sub = this.ListService.updateListingListener().subscribe(
    (arrayData: Listing[]) => {
      this.arrayData = arrayData
    }
  );
  }


  onDeleteListing(id: string) {
    this.ListService.deleteListing(id)
  }

  onHandleClose() {
    this.onChange = !this.onChange;
  }

  ngOnDestroy() {
    this.sub?.unsubscribe()
  }
  getId(i: number) {
    this.i = i
  }
}
