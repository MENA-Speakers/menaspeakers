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
        Schema::table('rate_cards', function (Blueprint $table) {
            $table->text('summary')->nullable()->after('portfolio_id');
            $table->boolean('selected')->default(false)->after('summary');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('rate_cards', function (Blueprint $table) {
            $table->dropColumn('summary');
            $table->dropColumn('selected');
        });
    }
};
