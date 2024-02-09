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
      Schema::table('rate_cards', function(Blueprint $table) {
        $table->foreignId('proposal_id')->nullable()->after('profile_id')->constrained('proposals');
      });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
      Schema::table('rate_cards', function(Blueprint $table) {
        $table->dropForeign(['proposal_id']);
        $table->dropColumn('proposal_id');
      });
    }
  };
