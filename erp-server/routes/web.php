<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CryptocurrencyController;
use App\Http\Controllers\ProductImageController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\ProductsController;

Route::get('/sanctum/csrf-cookie', function () {
    return response()->json(['csrf_token' => csrf_token()]);
});

Route::get('/api/products', [ProductsController::class, 'index']);
Route::post('/api/products', [ProductsController::class, 'store']);
Route::put('/api/products/{id}', [ProductsController::class, 'update']);
Route::delete('/api/products/{id}', [ProductsController::class, 'destroy']);
Route::post('/api/products/{id}/{imageType}', [ProductImageController::class, 'store']);

Route::get('/api/categories', [CategoriesController::class, 'index']);
Route::post('/api/categories', [CategoriesController::class, 'store']);

Route::get('/api/cryptocurrencies', [CryptocurrencyController::class, 'index']);
