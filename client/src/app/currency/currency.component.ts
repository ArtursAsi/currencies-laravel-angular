import {Component, OnInit} from '@angular/core';
import {CurrenciesService, Currency} from '../currencies.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  currency: Currency;

  constructor(private route: ActivatedRoute, private currenciesService: CurrenciesService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.currenciesService.getCurrency(id).subscribe(currency => {
          this.currency = currency;
        });
      }
    });
  }
}
