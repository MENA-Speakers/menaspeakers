<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Laravel\Scout\Searchable;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Speaker extends Model implements HasMedia
{
    use HasFactory, Searchable, HasSlug, InteractsWithMedia;

    protected $guarded = ['id'];

    public function getSlugOptions (): SlugOptions
    {
      return SlugOptions::create()
        ->generateSlugsFrom('name')
        ->saveSlugsTo('slug')
        ->doNotGenerateSlugsOnUpdate();
    }

    public function getRouteKeyName (): string
    {
      return 'slug';
    }

  public function registerMediaCollections(): void
  {
    $this->addMediaCollection('avatar')->singleFile();
  }


  public function videos(): HasMany
  {
    return $this->hasMany(Video::class);
  }

  public function location(): BelongsTo
  {
    return $this->belongsTo(Location::class);
  }

  public function toSearchableArray()
  {
    $array = $this->toArray();
    $array['location'] = $this->location?->name;
    return $array;
  }

}
