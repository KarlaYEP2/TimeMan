import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Listing} from "./list.model";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({providedIn: "root"})
export class ListService {
  private listings: Listing[] = [];

  constructor(private http: HttpClient) {
  }

  listingUpdated = new Subject<Listing[]>();
  private string = '';

  newListing(hours: number, desc: string) {
    const listing: Listing = {id: this.string, hours: hours, desc: desc}
    this.http.post<{ message: string, entryId: string }>('http://localhost:3000/api/entries', listing)
      .subscribe((responseData) => {
        listing.id = responseData.entryId
        this.listings.push(listing);
        this.listingUpdated.next([...this.listings]);
      })

  }

  updateListing(id: number, listings: Listing) {
    this.listings[id] = listings
    this.listingUpdated.next(this.listings.slice())
  }

  updateListingListener() {
    this.getListings()
    return this.listingUpdated.asObservable()
  }

  getListings() {
    this.http.get<{ message: string, entries: any }>('http://localhost:3000/api/entries'
    )
      .pipe(map((entryData) => {
        return entryData.entries.map((entry: { hours: any; desc: any; _id: any; }) => {
          return {
            hours: entry.hours,
            desc: entry.desc,
            id: entry._id
          }
        })
      }))
      .subscribe((entryData) => {
        this.listings = entryData
        this.listingUpdated.next([...this.listings])
      })
  }

  // deleteListing(index: number) {
  //   this.listings.splice(index, 1);
  //   this.listingUpdated.next(this.listings.slice())
  // }

  deleteListing(listId: string) {
    this.http.delete("http://localhost:3000/api/entries/" + listId)
      .subscribe(() => {
        this.listings = this.listings.filter(list => list.id !== listId)
        this.listingUpdated.next([...this.listings])
      })
  }
}
