import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {DividerModule} from 'primeng/divider';
import { AppRoutingModule } from './app-routing.module';
import {ButtonModule} from 'primeng/button';
import {BreadcrumbModule} from 'primeng/breadcrumb';

import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerInfoComponent } from './beer-info/beer-info.component';


@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    BreadcrumbModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
