<?php

namespace App\Services;

use App\Models\Category;

class CategoriesService {

    public function __construct() { }
    
    public function getCategories() {
        try {
            $response = Category::all();
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

    public function storeCategory($request) {
        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'description' => 'nullable|string',
            ]);

            $category = Category::create([
                'name' => $request->name,
                'description' => $request->description,
            ]);

            return [
                'message' => 'Category created successfully',
                'status' => 'success',
                'payload' => $category->toArray()
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
