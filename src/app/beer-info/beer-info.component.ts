import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BeerDataService } from '../services/beerData.service';

@Component({
  selector: 'app-beer-info',
  templateUrl: './beer-info.component.html',
  styleUrls: ['./beer-info.component.scss', '../beer-list/beer-list.component.scss']
})
export class BeerInfoComponent implements OnInit {
  constructor(private route: ActivatedRoute, private beerDataService: BeerDataService) { }
  activeBeer: any
  home: MenuItem = {icon: 'pi pi-home', routerLink: '/'}
  items: MenuItem[] = []

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.beerDataService.getBeers().subscribe(data => {
        let list = data
        this.activeBeer = list.filter((b: any) => b.id == params.id)[0]
        if (localStorage.getItem(`beer-${this.activeBeer.id}`)) {
          this.activeBeer.selected = true
        } else {
          this.activeBeer.selected = false
        }
        this.items = [
          {label: `${this.activeBeer.name}`}
        ]
      })
    })
  }

  addToFavourites(id:any) {
    if (this.beerDataService.addToFavourite(id)) {
      this.activeBeer.selected = true
    } else {
      this.activeBeer.selected = false
    }
  }
}
