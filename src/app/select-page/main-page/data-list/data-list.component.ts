import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ListService} from "../../../list.service";
import {Subscription} from "rxjs";
import {Listing} from "../../../models/list.model";

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
  @Input() projectId: string

  constructor(private ListService: ListService) { }

  ngOnInit() {
    const projectId = (this.projectId)
    this.ListService.getListings()
    this.sub = this.ListService.updateListingListener().subscribe(
      // Date sort function
    (arrayData: Listing[]) => {
      arrayData.sort((a: { date: any; }, b: { date: any; }) => {
        const dt1 = Date.parse(a.date);
        const dt2 = Date.parse(b.date);
        if (dt1 < dt2) return -1;
        if (dt1 > dt2) return 1;
        return 0;
      });
      this.arrayData = arrayData // arrayData is sorted data by date
      // check to see if projectId are the same in the list
      this.arrayData = this.arrayData.filter(function( obj ) {
        return obj.projectId == projectId
      });
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

  getId(i: number) { // index tracker for popup inorder to edit specific list values
    this.i = i
  }
}
