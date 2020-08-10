import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CurrenciesComponent} from './currencies/currencies.component';
import {CurrencyComponent} from './currency/currency.component';

const routes: Routes = [
  {
    path: 'currencies/:id',
    component: CurrencyComponent
  },

  {
    path: 'currencies',
    component: CurrenciesComponent
  },
  {
    path: '',
    redirectTo: 'currencies',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
