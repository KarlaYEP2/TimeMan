import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Listing} from "./list.model";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: "root"})
export class ListService {
  listings: Listing[] = [];

  constructor(private http: HttpClient) {
  }

  listingUpdated = new Subject<Listing[]>();

  newListing(hours: number, desc:string) {
    const listing: Listing = {id: null, hours:hours, desc: desc}
    this.http.post<{message:string}>('http://localhost:3000/api/entries', listing)
      .subscribe((responseData) => {
        console.log(responseData.message)
      })
    this.listings.push(listing)
    this.listingUpdated.next([...this.listings])
  }

  updateListing(id: number, listings: Listing) {
    this.listings[id] = listings
    this.listingUpdated.next(this.listings.slice())
  }

  getListings() {
    this.http.get<{message: string, entries: Listing[]}>('http://localhost:3000/api/entries')
      .subscribe((postData) => {
        this.listings = postData.entries
        this.listingUpdated.next([...this.listings])

      })
  }

  deleteListing(index: number) {
    this.listings.splice(index, 1);
    this.listingUpdated.next(this.listings.slice())
  }

}
