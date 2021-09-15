import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BeerDataService } from '../services/beerData.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss'],
})

export class BeerListComponent implements OnInit {
  constructor(private beerDataService: BeerDataService, private router: Router) { }

  beerList: Array<any> = []

  ngOnInit() {
    this.getBeersList()
  }

  getBeersList() {
    this.beerDataService.getBeers().subscribe(data => {
      this.beerList = data
      return this.beerList.map(b => {
        if (localStorage.getItem(`beer-${b.id}`)) {
          b.selected = true
        } else {
          b.selected = false
        }
      })
    }, error => console.log('Произогла ошибка:', error)
    )

  }

  openDetail(id:number) {
    this.router.navigate([`beer-info`, id]),
    {
      queryParam: {id}
    }
  }

  addToFavourites(id:any) {
    this.beerDataService.addToFavourite(id)
    this.getBeersList()
  }
}
