<?php

  namespace App\Models;

  use Illuminate\Database\Eloquent\Factories\HasFactory;
  use Illuminate\Database\Eloquent\Model;
  use Laravel\Scout\Searchable;
  use Spatie\MediaLibrary\HasMedia;
  use Spatie\MediaLibrary\InteractsWithMedia;
  use Spatie\MediaLibrary\MediaCollections\Models\Media;
  use Spatie\Sluggable\HasSlug;
  use Spatie\Sluggable\SlugOptions;

  class Blog extends Model implements HasMedia
  {
    use HasFactory, Searchable, HasSlug, InteractsWithMedia;

    protected $guarded = ['id'];

    function getSlugOptions(): SlugOptions
    {
      return SlugOptions::create()
        ->generateSlugsFrom('title')
        ->saveSlugsTo('slug')
        ->doNotGenerateSlugsOnUpdate();
    }

    function getRouteKeyName(): string
    {
      return 'slug';
    }

    public function registerMediaCollections(): void
    {
      $this->addMediaCollection('image')
        ->singleFile();
    }

    //add media webp conversion using media library
    public function registerMediaConversions(Media $media = null): void
    {
      $this->addMediaConversion('webp')
        ->format('webp')
        ->performOnCollections('image');
    }

  }
