import {Component, Input, OnInit} from '@angular/core';
import {ListService} from "../../../list.service";
import {Listing} from "../../../models/list.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['/tracker.component.css']
})
export class TrackerComponent implements OnInit {

  listData:Listing[] = [];
  sub: Subscription | undefined

  @Input() projectId: string
  @Input()hoursMax!: number
  hoursSpent!: number
  constructor(private listService:ListService) { }

  ngOnInit(): void {
    const projectId = (this.projectId)
    this.sub = this.listService.listingUpdated.subscribe(
      (arrayData: Listing[]) => {
        this.listData = this.listData.filter(function( obj ) {
          return obj.projectId == projectId
        });
        // There needs to be a better way to present it since it is used multiple times
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
