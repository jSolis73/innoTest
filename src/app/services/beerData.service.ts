import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class BeerDataService {
  constructor(private http: HttpClient) {}

  getBeers(): Observable<any> {
    return this.http.get(`https://api.punkapi.com/v2/beers?page=2&per_page=30`)
  }

  addToFavourite(id:any) {
    if (localStorage.getItem(`beer-${id}`)) {
      localStorage.removeItem(`beer-${id}`)
      return false
    } else {
      localStorage.setItem(`beer-${id}`, '+')
      return true
    }
  }
}
