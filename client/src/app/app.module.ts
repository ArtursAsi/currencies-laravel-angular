import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {CurrenciesService} from './currencies.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {CurrenciesTableComponent} from './currencies-table/currencies-table.component';
import {CurrenciesComponent} from './currencies/currencies.component';
import {CurrencyComponent} from './currency/currency.component';
import {CurrencyTableComponent} from './currency-table/currency-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrenciesTableComponent,
    CurrencyTableComponent,
    CurrenciesComponent,
    CurrencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    CurrenciesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
