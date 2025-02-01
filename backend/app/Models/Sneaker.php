<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;

class Sneaker extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'cost',
        'isLiked',
        'inCart',
        'img'
    ];

    public function getTableColumns()
    {
        return Schema::getColumnListing($this->getTable());
    }


}
