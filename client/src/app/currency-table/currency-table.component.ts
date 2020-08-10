import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Currency} from '../currencies.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss']
})
export class CurrencyTableComponent implements OnInit {
  @Input() currency: Currency[];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ['name', 'value', 'date'];
  currencyData: MatTableDataSource<Currency>;



  ngOnInit(): void {
    this.currencyData = new MatTableDataSource(this.currency);
    this.currencyData.paginator = this.paginator;
  };


}

