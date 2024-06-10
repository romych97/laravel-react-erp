<?php

namespace App\Services;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Storage;

class ImageService {

    public function __construct() { }
    
    public function uploadMainImage(Request $request, $productId) {
        try {
            $request->validate([
                'main_image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);
    
            $product = Product::findOrFail($productId);
    
            $imageName = time().'.'.$request->main_image->extension();
            $path = $request->main_image->storeAs('public/images', $imageName);
    
            $product->main_image_url = Storage::url($path);
            $product->save();
    
            return [
                'message' => '',
                'status' => 'success',
                'payload' => $product->main_image_url,
            ];
        } catch (\Exception $e) {
            return [
                'message' => $e->getMessage(),
                'status' => 'error',
                'payload' => null,
            ];
        }
    }
    
    public function uploadAdditionalImages(Request $request, $productId) {
        try {
            $request->validate([
                'additional_images.*' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);
    
            $product = Product::findOrFail($productId);
            $uploadedImages = [];
    
            foreach ($request->file('additional_images') as $image) {
                $imageName = time().rand(1, 1000).'.'.$image->extension();
                $image->storeAs('public/images', $imageName);
    
                $imageRecord = Image::create([
                    'product_id' => $product->id,
                    'url' => 'storage/images/'.$imageName,
                    'description' => $image->getClientOriginalName(),
                    'alt_text' => $image->getClientOriginalName(),
                    'width' => null, // You can use intervention/image to get this info if needed
                    'height' => null, // You can use intervention/image to get this info if needed
                ]);
    
                $uploadedImages[] = $imageRecord;
            }
    
            return [
                'message' => 'Additional images uploaded successfully.',
                'status' => 'success',
                'payload' => $uploadedImages,
            ];
        } catch (\Exception $e) {
            return [
                'message' => $e->getMessage(),
                'status' => 'error',
                'payload' => null,
            ];
        }
    }

}
