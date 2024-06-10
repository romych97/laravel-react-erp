<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $casts = [
        'additional_images' => 'array',
    ];

    protected $fillable = [
        'name',
        'description',
        'sku',
        'category_id',
        'original_price',
        'discounted_price',
        'currency',
        'quantity',
        'min_order_quantity',
        'max_order_quantity',
        'color',
        'size',
        'weight',
        'main_image_url',
        'additional_images',
        'vendor_id',
        'vendor_name',
        'shipping_cost',
        'shipping_time',
        'characteristics',
        'photo_url' // If using the single photo URL approach
    ];

    // If using the multiple photos approach
    public function images() {
        return $this->hasMany(Image::class);
    }

    // Other relationships and methods...
}
