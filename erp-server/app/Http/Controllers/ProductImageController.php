<?php

namespace App\Http\Controllers;

use App\Services\ImageService;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Image;

class ProductImageController extends Controller {
    protected $imageService;

    public function __construct(ImageService $imageService) {
        $this->imageService = $imageService;
    }

    public function store(Request $request, $productId, $imageType) {
        if ($imageType == "main-image") {
            $response = $this->imageService->uploadMainImage($request, $productId);
            return response()->json($response);
        } elseif($imageType == "additional-image") {
            $response = $this->imageService->uploadAdditionalImage($request, $productId);
            return response()->json($response);
        }
    }
}
