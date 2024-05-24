<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CryptocurrencyController;


Route::get('/api', function () {
    return "sds";
});

Route::get('/api/cryptocurrencies', [CryptocurrencyController::class, 'index']);
