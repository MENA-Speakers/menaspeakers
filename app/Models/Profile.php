<?php

namespace App\Models;

use App\Traits\HashId;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Laravel\Scout\Searchable;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Illuminate\Support\Str;

class Profile extends Model implements HasMedia
{
    use HasFactory, HashId, InteractsWithMedia, Searchable;

    protected $guarded = ['id'];

    // Add the boot method to hash id on model creation


    protected $casts = [
        'dob' => 'date',
    ];

    public function getRouteKeyName(): string
    {
        return 'hash_id';
    }


    public function getFullNameAttribute(): string
    {
        return "{$this->first_name} {$this->last_name}";
    }

    public function registerMediaCollections(): void
    {
      $this->addMediaCollection('avatar')->singleFile();
      $this->addMediaCollection('gallery');
    }

    public function videoLinks(): MorphMany
    {
      return $this->morphMany(VideoLink::class, 'video_linkable');
    }


  public function registerMediaConversions(Media $media = null): void
  {
    $this->addMediaConversion('jpg')
      ->format('jpg')
      ->performOnCollections('avatar');

    $this->addMediaConversion('webp')
      ->width(1000)
      ->height(600)
      ->format('webp')->performOnCollections('gallery');
  }


  public function videos(): HasMany
  {
    return $this->hasMany(Video::class);
  }


  public function portfolios(): HasMany
  {
    return $this->hasMany(Portfolio::class);
  }

  public function proposals(): BelongsToMany
  {
    return $this->belongsToMany(Proposal::class);
  }

  public function rateCards(): HasMany
  {
    return $this->hasMany(RateCard::class);
  }

}
