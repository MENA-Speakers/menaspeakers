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
        Schema::table('proposals', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id')->nullable()->after('id');
            $table->longText('body')->nullable();
            $table->string('summary')->nullable();
            $table->text('footer')->nullable();
            $table->foreign('user_id')->references('id')->on('users');
            $table->dropColumn('slug');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('proposals', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
            $table->dropColumn('user_id');
            $table->string('slug')->after('id');
                  $table->dropColumn('summary');
            $table->dropColumn('body');
            $table->dropColumn('footer');
        });
    }
};
