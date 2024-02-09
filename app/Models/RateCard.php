<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Ramsey\Uuid\Uuid;

class RateCard extends Model
{
    use HasFactory;

    protected $guarded = [
        'id',
    ];

    //Generate hash id upon creation
  protected static function boot(): void
  {
    parent::boot();
    static::creating(function ($rateCard) {
      $rateCard->hash_id = Uuid::uuid4()->toString();
    });
  }

    public function getRouteKeyName(): string
    {
        return 'hash_id';
    }

    public function proposal(): BelongsTo
    {
        return $this->belongsTo(Proposal::class);
    }

    public function profile(): BelongsTo
    {
        return $this->belongsTo(Profile::class);
    }

    public function portfolio(): BelongsTo
    {
        return $this->belongsTo(Portfolio::class);
    }


}
