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
        Schema::table('videos', function (Blueprint $table) {
            $table->unsignedBigInteger('bio_id')->nullable();
            $table->foreign('bio_id')->references('id')->on('bios')->onDelete('cascade');
            //make speaker id nullable
            $table->unsignedBigInteger('speaker_id')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('videos', function (Blueprint $table) {
            $table->dropForeign(['bio_id']);
            $table->dropColumn('bio_id');
        });
    }
};
