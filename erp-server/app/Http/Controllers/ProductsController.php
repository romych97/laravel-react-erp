<?php

namespace App\Http\Controllers;

use App\Services\ProductsService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductsController extends Controller {
    protected $productsService;

    public function __construct(ProductsService $productsService) {
        $this->productsService = $productsService;
    }

    public function index(): JsonResponse {
        $response = $this->productsService->getProducts();
        return response()->json($response);
    }
    public function store(Request $request) {
        $response = $this->productsService->storeProduct($request);
        return response()->json($response);
    }
    public function update(Request $request, $id) {
        $response = $this->productsService->updateProduct($request, $id);
        return response()->json($response);
    }
    public function destroy(Request $request, $id)
    {
        $response = $this->productsService->destroyProduct($request, $id);
        return response()->json($response);
    }
}
