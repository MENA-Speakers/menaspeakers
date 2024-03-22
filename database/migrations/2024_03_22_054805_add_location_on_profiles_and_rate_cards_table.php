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
        Schema::table('profiles', function (Blueprint $table) {
            $table->string('location')->nullable()->after('id');
        });

      Schema::table('rate_cards', function (Blueprint $table) {
        $table->string('location')->nullable()->after('id');
      });


      Schema::table('portfolios', function (Blueprint $table) {
        $table->string('location')->nullable()->after('id');
      });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('profiles', function (Blueprint $table) {
            $table->dropColumn('location');
        });

      Schema::table('rate_cards', function (Blueprint $table) {
        $table->dropColumn('location');
      });

      Schema::table('portfolios', function (Blueprint $table) {
        $table->dropColumn('location');
      });
    }
};
