import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Listing} from "./list.model";

@Injectable({providedIn: "root"})
export class ListService {
  listings: Listing[] = [
    {hours: 3, desc: 'Cock'},
    {hours: 3, desc: 'Cock'}
  ];

  listingUpdated = new Subject<Listing[]>();

  newListing(listings: Listing[]) {
    this.listings = listings
    console.log(this.listings)
    this.listingUpdated.next(this.listings.slice())
  }

  updateListing(id: number, listings: Listing) {
    this.listings[id] = listings
    this.listingUpdated.next(this.listings.slice())
  }

  getListings() {
    return this.listings.slice()
    // this.listings = listings;
  }

  deleteListing(index: number) {
    this.listings.splice(index, 1);
    this.listingUpdated.next(this.listings.slice())
  }

}
