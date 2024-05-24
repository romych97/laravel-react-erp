<?php

namespace App\Http\Controllers;

use App\Services\CryptocurrencyService;
use Illuminate\Http\JsonResponse;

class CryptocurrencyController extends Controller
{
    protected $cryptocurrencyService;

    public function __construct(CryptocurrencyService $cryptocurrencyService)
    {
        $this->cryptocurrencyService = $cryptocurrencyService;
    }

    public function index(): JsonResponse
    {
        $response = $this->cryptocurrencyService->getCryptocurrencies();
        return response()->json($response);
    }
}
