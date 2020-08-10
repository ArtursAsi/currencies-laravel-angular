<?php

namespace App\Http\Controllers;

use App\Currency;
use Carbon\Carbon;

class CurrencyController extends Controller
{

    public function index()
    {
        $day = Carbon::createFromTimestamp(strtotime('last weekday'.Carbon::now()));
        $currencies = Currency::date($day->format('Y-m-d'))->get();


        return $currencies;
    }

    public function show(Currency $currency)
    {
        $currencies = Currency::name($currency->name)->get();


        return $currencies;
    }


}
