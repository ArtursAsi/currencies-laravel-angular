import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Currency} from '../currencies.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-currencies-table',
  templateUrl: './currencies-table.component.html',
  styleUrls: ['./currencies-table.component.scss']
})
export class CurrenciesTableComponent implements OnInit {
  @Input() currencies: Currency[];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ['name', 'value', 'date'];
  currencyData: MatTableDataSource<Currency>;



  ngOnInit(): void {
    this.currencyData = new MatTableDataSource(this.currencies);
    this.currencyData.paginator = this.paginator;
  };


}

