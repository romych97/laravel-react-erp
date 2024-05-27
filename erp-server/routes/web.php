<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CryptocurrencyController;
use App\Http\Controllers\CategoriesController;

Route::get('/sanctum/csrf-cookie', function () {
    return response()->json(['csrf_token' => csrf_token()]);
});

Route::get('/api/categories', [CategoriesController::class, 'index']);
Route::post('/api/categories', [CategoriesController::class, 'store']);

Route::get('/api/cryptocurrencies', [CryptocurrencyController::class, 'index']);
