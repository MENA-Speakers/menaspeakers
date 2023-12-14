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
      //drop portfolio table
      Schema::dropIfExists('portfolios');

      Schema::create('portfolios', function (Blueprint $table) {
            $table->id();
            $table->text('title')->nullable();
            $table->longText('body')->nullable();
            $table->integer('fee')->nullable();
            $table->integer('order')->nullable();
            $table->text('hash_id')->nullable();
            $table->unsignedBigInteger('profile_id')->nullable();
            $table->foreign('profile_id')->references('id')->on('profiles')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('portfolios');
    }
};
