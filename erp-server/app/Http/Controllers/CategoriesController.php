<?php

namespace App\Http\Controllers;

use App\Services\CategoriesService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CategoriesController extends Controller {
    protected $categoriesService;

    public function __construct(CategoriesService $categoriesService) {
        $this->categoriesService = $categoriesService;
    }

    public function index(): JsonResponse {
        $response = $this->categoriesService->getCategories();
        return response()->json($response);
    }
    public function store(Request $request) {
        $response = $this->categoriesService->storeCategory($request);
        return response()->json($response);
    }
}
