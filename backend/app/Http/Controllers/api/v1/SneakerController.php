<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use App\Models\Sneaker;
use Illuminate\Http\Request;

class SneakerController extends Controller
{
    public function index(Request $request)
    {
        $sneakers = Sneaker::query()->paginate(10);
        return response()->json(['status' => 'success', 'sneakers' => $sneakers]);
    }
}
