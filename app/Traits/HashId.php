<?php
  namespace App\Traits;

  use Illuminate\Support\Str;

  trait HashId
  {
    public static function bootHashId(): void
    {
// The booting method of the trait. Laravel will automatically call this method, thanks to its built-in booting conventions for traits.
      static::creating(function ($model) {
        $hash_id = Str::random(40);
        while (self::query()->where('hash_id', $hash_id)->exists()) {
          $hash_id = Str::random(40);
        }

        $model->hash_id = $hash_id;
      });
    }
  }
