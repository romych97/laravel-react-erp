<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->string('photo_url')->nullable()->after('description');
            $table->string('sku')->unique();
            $table->unsignedBigInteger('category_id')->nullable();
            $table->decimal('original_price', 10, 2);
            $table->decimal('discounted_price', 10, 2)->nullable();
            $table->string('currency', 3)->nullable();
            $table->json('characteristics')->nullable();
            $table->integer('quantity')->default(0);
            $table->integer('min_order_quantity')->default(1);
            $table->integer('max_order_quantity')->nullable();
            $table->string('color')->nullable();
            $table->string('size')->nullable();
            $table->decimal('weight', 8, 2)->nullable();
            $table->decimal('rating', 8, 2)->nullable();
            $table->string('main_image_url');
            $table->json('additional_images')->nullable();
            $table->unsignedBigInteger('vendor_id')->nullable();
            $table->string('vendor_name')->nullable();
            $table->decimal('shipping_cost', 10, 2)->nullable();
            $table->string('shipping_time')->nullable();
            $table->timestamps();
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
