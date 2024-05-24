<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class CryptocurrencyService {
    protected $baseUrl;
    protected $apiKey;

    public function __construct() {
        $this->baseUrl = config('app.cryptocurrencies_api_url');
        $this->apiKey = config('app.coinmarketcap_api_key');
    }
    
    public function getCryptocurrencies() {
        try {
            $response = Http::withHeaders([
                'X-CMC_PRO_API_KEY' => $this->apiKey,
            ])->get($this->baseUrl . '/cryptocurrency/listings/latest', [
                'start' => 1,
                'limit' => 50,
                'convert' => 'USD'
            ]);

            if ($response->successful()) {
                return [
                    'message' => '',
                    'status' => 'success',
                    'payload' => $response->json()
                ];
            } else {
                return [
                    'message' => 'Failed to fetch data',
                    'status' => 'error',
                    'payload' => $response->json()
                ];
            }
        } catch (\Exception $e) {
            return [
                'message' => $e->getMessage(),
                'status' => 'error',
                'payload' => null
            ];
        }
    }
}
