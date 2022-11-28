import {Component, EventEmitter, Input, Output} from "@angular/core";
import {NgForm} from "@angular/forms";
import {ListService} from "../../../../list.service";

@Component({
  selector: 'app-change',
  templateUrl: 'changeListing.component.html',
  styleUrls: ['changeListing.component.css']

})
export class ChangeListingComponent {

  constructor(private ListService: ListService) {
  }
  arrayNumbers = [1,2,3,4,5,6,7,8,9,10]

  @Input() projectId: string
  @Input() dataId!: string
  @Input() ogHour!: number
  @Input() ogDesc!: string
  @Input() ogDate!: Date

  @Output() close = new EventEmitter<void>()
  onSubmit(f: NgForm) {
    this.ListService.updateListing(this.dataId, Number(f.value.hours) ,f.value.desc, this.projectId, this.ogDate)
    this.close.emit()


  }

  onClose() {
    this.close.emit()
  }

}
