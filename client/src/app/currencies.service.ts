import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

export interface Currency {
  id: number;
  name: string;
  value: string;
  date: string;
}

@Injectable()
export class CurrenciesService {
  url = 'http://127.0.0.1:8000/api/currencies';
  constructor(private http: HttpClient) {
  }
  getCurrencies(): Observable<Currency[]> {
    return this.http.get<Currency[]>(this.url);
  }

  getCurrency(id: number): Observable<Currency> {
    return this.http.get<Currency>(`${this.url}/${id}`);


  }
}
