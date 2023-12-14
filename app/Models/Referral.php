<?php

  namespace App\Models;

  use Illuminate\Database\Eloquent\Factories\HasFactory;
  use Illuminate\Database\Eloquent\Model;
  use Illuminate\Support\Str;

  class Referral extends Model
  {
    use HasFactory;

    protected $guarded = [
      'id'
    ];

    protected static function booted(): void
    {
      static::creating(function($model) {
        $model->hash_id = $model->generateHashId();
      });
    }

    protected function generateHashId(): string
    {
      do {
        $hash_id = Str::random(40);
      } while( self::where('hash_id', $hash_id)->exists() );

      return $hash_id;
    }


  }
