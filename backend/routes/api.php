<?php

use App\Http\Controllers\api\v1\SneakerController;
use Illuminate\Http\Request;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');


Route::controller(SneakerController::class)
->prefix('/sneakers')
->group(function ()
{
    Route::get('/', 'index')->name('sneakers.index');
    // Route::get('/test', 'test')->name('sneakers.test');
});