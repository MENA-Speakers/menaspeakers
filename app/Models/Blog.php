<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Blog extends Model implements HasMedia
{
    use HasFactory, Searchable, HasSlug, InteractsWithMedia;

    protected $guarded = ['id'];

    function getSlugOptions (): SlugOptions
    {
       return SlugOptions::create()
         ->generateSlugsFrom('title')
         ->saveSlugsTo('slug')
         ->doNotGenerateSlugsOnUpdate();
    }

    function getRouteKeyName (): string
    {
      return 'slug';
    }

    public function registerMediaCollections(): void
    {
      $this->addMediaCollection('image')
        ->singleFile();
    }
}
