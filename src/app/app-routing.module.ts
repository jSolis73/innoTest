import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerInfoComponent } from './beer-info/beer-info.component';
import { BeerListComponent } from './beer-list/beer-list.component';

const routes: Routes = [
  {path: '', component: BeerListComponent},
  {path: 'beer-info/:id', component: BeerInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
