import {Component, OnInit} from '@angular/core';
import {CurrenciesService, Currency} from '../currencies.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {
  currencies: Currency[];

  constructor(private currenciesService: CurrenciesService) {
  }

  ngOnInit() {
    this.currenciesService.getCurrencies().subscribe(currencies => {
      this.currencies = currencies;
    });

  }
}
