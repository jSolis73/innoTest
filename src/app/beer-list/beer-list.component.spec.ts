import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { BeerDataService } from '../services/beerData.service';
import { RouterTestingModule } from '@angular/router/testing';
import { BeerListComponent } from './beer-list.component';

describe('BeerListComponent', () => {
  let component: BeerListComponent;
  let fixture: ComponentFixture<BeerListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerListComponent ],
      imports: [HttpClientModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerListComponent)
    component = fixture.componentInstance;
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call function getBeersList when run onInit', () => {
    let spy = spyOn(component, 'getBeersList')
    component.ngOnInit()
    expect(spy).toHaveBeenCalled()
  });
});
