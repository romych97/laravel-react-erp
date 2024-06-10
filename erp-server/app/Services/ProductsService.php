<?php

namespace App\Services;

use App\Models\Product;

class ProductsService {

    public function __construct() { }
    
    public function getProducts() {
        try {
            $response = Product::all();
            return [
                'message' => '',
                'status' => 'success',
                'payload' => $response->toArray()
            ];
        } catch (\Exception $e) {
            return [
                'message' => $e->getMessage(),
                'status' => 'error',
                'payload' => null
            ];
        }
    }

    public function storeProduct($request) {
        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'sku' => 'required|string|max:12',
                'original_price' => 'required|numeric',
                'description' => 'nullable|string',
            ]);

            $product = Product::create([
                'name' => $request->name,
                'description' => $request->description,
                'original_price' => $request->original_price,
                'sku' => $request->sku,
            ]);

            return [
                'message' => 'Product created successfully',
                'status' => 'success',
                'payload' => $product->toArray()
            ];
        } catch (\Exception $e) {
            return [
                'message' => $e->getMessage(),
                'status' => 'error',
                'payload' => null
            ];
        }
    }

    public function updateProduct($request, $id) {
        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'sku' => 'required|string|max:12',
                'original_price' => 'required|numeric',
                'description' => 'nullable|string',
            ]);
    
            $product = Product::findOrFail($id);
            $product->update([
                'name' => $request->name,
                'description' => $request->description,
                'original_price' => $request->original_price,
                'sku' => $request->sku,
            ]);
    
            return response()->json([
                'message' => 'Product updated successfully',
                'status' => 'success',
                'payload' => $product->toArray()
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'status' => 'error',
                'payload' => null
            ], 500);
        }
    }

    public function destroyProduct($request, $id) {
        try {

            $product = Product::find($id);
            if ($product) {
                $product->delete();
                return response()->json(['status' => 'success', 'message' => 'Product deleted successfully.']);
            } else {
                return response()->json(['status' => 'error', 'message' => 'Product not found.'], 404);
            }

            return [
                'message' => 'Product created successfully',
                'status' => 'success',
                'payload' => $product->toArray()
            ];
        } catch (\Exception $e) {
            return [
                'message' => $e->getMessage(),
                'status' => 'error',
                'payload' => null
            ];
        }
    }
}
