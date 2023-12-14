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
        Schema::dropIfExists('bios');

        //drop bio_id on videos table
        Schema::table('videos', function (Blueprint $table) {
            $table->dropForeign(['bio_id']);
            $table->dropColumn(['bio_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::create('bios', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('company')->nullable();
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->string('website')->nullable();
            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->timestamps();
        });

        //add bio_id on videos table
        Schema::table('videos', function (Blueprint $table) {
            $table->unsignedBigInteger('bio_id')->nullable();
            $table->foreign('bio_id')->references('id')->on('bios')->onDelete('cascade');
        });
    }
};
