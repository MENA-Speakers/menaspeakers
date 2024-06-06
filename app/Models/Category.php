<?php

  namespace App\Models;

  use Illuminate\Database\Eloquent\Factories\HasFactory;
  use Illuminate\Database\Eloquent\Model;
  use Illuminate\Database\Eloquent\Relations\BelongsToMany;
  use Spatie\MediaLibrary\HasMedia;
  use Spatie\MediaLibrary\InteractsWithMedia;
  use Spatie\MediaLibrary\MediaCollections\Models\Media;
  use Spatie\Sluggable\HasSlug;
  use Spatie\Sluggable\SlugOptions;

  class Category extends Model implements HasMedia
  {
    use HasFactory, InteractsWithMedia, HasSlug;

    protected $guarded = ['id'];

    /**
     * Get the options for generating the slug.
     *
     * @return SlugOptions
     */
    function getSlugOptions(): SlugOptions
    {
      return SlugOptions::create()
        ->generateSlugsFrom('name')
        ->saveSlugsTo('slug')
        ->doNotGenerateSlugsOnUpdate();
    }

    /**
     * Get the route key for the model.
     *
     * @return string
     */

    function getRouteKeyName(): string
    {
      return 'slug';
    }

    /**
     * The speakers that belong to the category.
     */
    public function speakers(): BelongsToMany
    {
      return $this->belongsToMany(Speaker::class, 'categories_speakers');
    }


    /**
     * Register the media collections
     */

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('image');
    }


    /**
     * Register the media conversions using media library
     */
    public function registerMediaConversions(Media $media = null): void
    {
      $this->addMediaConversion('webp')
        ->format('webp')
        ->performOnCollections('image');
    }

  }
