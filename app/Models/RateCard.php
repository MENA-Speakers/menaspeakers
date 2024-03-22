<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Ramsey\Uuid\Uuid;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class RateCard extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

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


  public function videoLinks(): MorphMany
  {
    return $this->morphMany(VideoLink::class, 'video_linkable');
  }


  public function registerMediaCollections(): void
  {
    $this->addMediaCollection('gallery');
  }

  public function registerMediaConversions(Media $media = null): void
  {
    $this->addMediaConversion('jpg')
      ->format('jpg')
      ->performOnCollections('gallery');
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
