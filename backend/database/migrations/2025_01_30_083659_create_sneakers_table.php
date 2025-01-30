<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sneakers', function (Blueprint $table) {
            $table->id();
            $table->text('title');
            $table->string('img')->nullable();
            $table->integer('cost');
            $table->boolean('isLiked')->default(false);
            $table->boolean('inCart')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sneakers');
    }
};
