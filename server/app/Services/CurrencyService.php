<?php

namespace App\Services;

use App\Currency;
use DateTime;

class CurrencyService
{

    public static function getData()
    {
        $data = file_get_contents('https://www.bank.lv/vk/ecb_rss.xml');
        $xml = simplexml_load_string($data, 'SimpleXMLElement', LIBXML_NOCDATA);
        $json = json_encode($xml);
        return $array = json_decode($json, true);
    }

    public static function update()
    {
        $array = self::getData();

        for ($i = 0; $i < count($array['channel']['item']); $i++) {

            $currencies = explode(' ', trim($array['channel']['item'][$i]['description'], ' '));
            $pubDate = strtotime($array['channel']['item'][$i]['pubDate']);
            $date = DateTime::createFromFormat('U', $pubDate);

            for ($j = 0; $j < count($currencies); $j += 2) {
                $search = Currency::where('name', $currencies[$j])->where('date',$date)->count();

                if ($search === 0) {
                    Currency::create([
                        'name' => $currencies[$j],
                        'value' => $currencies[$j + 1],
                        'date' => $date
                    ]);
                }
            }
        }
    }


}
