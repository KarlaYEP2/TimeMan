import {Component, EventEmitter, Input, Output} from "@angular/core";
import {NgForm} from "@angular/forms";
import {ListService} from "../../list.service";

@Component({
  selector: 'app-change',
  templateUrl: 'changeListing.component.html',
  styleUrls: ['changeListing.component.css']

})
export class ChangeListingComponent {

  constructor(private ListService: ListService) {
  }

  @Input() dataId!: string
  @Input() ogHour!: number
  @Input() ogDesc!: string

  @Output() close = new EventEmitter<void>()
  onSubmit(f: NgForm) {
    this.ListService.updateListing(this.dataId, Number(f.value.hours) ,f.value.desc)
    this.close.emit()


  }

  onClose() {
    this.close.emit()
  }

}
