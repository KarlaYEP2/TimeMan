import {Component, OnInit} from '@angular/core';
import {ListService} from "../../list.service";
import {Listing} from "../../list.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['/tracker.component.css']
})
export class TrackerComponent implements OnInit {
  listData:Listing[] = [];
  sub: Subscription | undefined

  hoursMax = 730;
  hoursSpent!: number
  constructor(private listService:ListService) { }

  ngOnInit(): void {
    this.sub = this.listService.listingUpdated.subscribe(
      (arrayData: Listing[]) => {
        this.listData = arrayData
        //This function is redundant and there needs to be a better way to present it
        this.hoursSpent = this.listData.reduce((accumulator, obj) => {
          return accumulator + Number(obj.hours);
        }, 0)
      }
    );
    this.listService.updateListingListener()
      .subscribe((data) => {
      this.listData = data
    })
  this.getTotal()
  }

  getTotal() {
    this.hoursSpent = this.listData.reduce((accumulator, obj) => {
      return accumulator + Number(obj.hours);
    }, 0)
  }
}
