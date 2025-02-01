<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use App\Models\Sneaker;
use Illuminate\Http\Request;

class SneakerController extends Controller
{
    public function index(Request $request)
    {
        // $sneakers = Sneaker::query()->paginate(10);
        $sneakers = Sneaker::query()
        ->when(!empty($request->get('search')), function ($query) use ($request) {
            return $query->where('title', 'ILIKE', '%' . $request->get('search') . '%');
        })
        ->when(!empty($request->get('sort')), function ($query) use ($request) {
            if(in_array($request->get('sort'),(new Sneaker)->getTableColumns())){
                return $query->orderBy($request->get('sort'));
            }
        })->paginate(10);
        return response()->json(['status' => 'success', 'sneakers' => $sneakers]);
    }

    public function test(Request $request)
    {
        $sneakers = Sneaker::query()
        ->when(!empty($request->get('search')), function ($query) use ($request) {
            return $query->where('title', 'ILIKE', '%' . $request->get('search') . '%');
        })->get();
        return response()->json(['data' => $sneakers]);
    }


}
