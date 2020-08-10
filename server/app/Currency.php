<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
    protected $fillable = ['name', 'value', 'date'];

    public function scopeDate($query, $date)
    {
        return $query->where('date', $date);
    }

    public function scopeName($query, $name)
    {
        return $query->where('name', $name);
    }
}
