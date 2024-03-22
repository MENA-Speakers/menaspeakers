<?php

namespace App\Models;

use App\Traits\HashId;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Laravel\Scout\Searchable;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\MediaLibrary\InteractsWithMedia;

class Portfolio extends Model implements HasMedia
{
    use HasFactory, HashId, InteractsWithMedia, Searchable;

    protected $guarded = ['id'];

    public function profile(): BelongsTo
    {
        return $this->belongsTo(Profile::class);
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

  public function rateCards(): HasMany
  {
    return $this->hasMany(RateCard::class);
  }

  public function videoLinks(): MorphMany
  {
    return $this->morphMany(VideoLink::class, 'video_linkable');
  }

  public function getRouteKeyName(): string
    {
      return 'hash_id';
    }


    public function toSearchableArray(): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'summary' => $this->summary,
            'first_name' => $this->profile->first_name,
            'last_name' => $this->profile->last_name,
            'fee' => $this->profile->fee,
        ];
    }


}
