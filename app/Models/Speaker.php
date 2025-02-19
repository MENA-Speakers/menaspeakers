<?php

  namespace App\Models;

  use Illuminate\Database\Eloquent\Factories\HasFactory;
  use Illuminate\Database\Eloquent\Model;
  use Illuminate\Database\Eloquent\Relations\BelongsTo;
  use Illuminate\Database\Eloquent\Relations\BelongsToMany;
  use Illuminate\Database\Eloquent\Relations\HasMany;
  use Illuminate\Database\Eloquent\Relations\MorphToMany;
  use Laravel\Scout\Searchable;
  use Spatie\MediaLibrary\HasMedia;
  use Spatie\MediaLibrary\InteractsWithMedia;
  use Spatie\MediaLibrary\MediaCollections\Models\Media;
  use Spatie\Sluggable\HasSlug;
  use Spatie\Sluggable\SlugOptions;
  use Spatie\Tags\HasTags;

  class Speaker extends Model implements HasMedia
  {
    use HasFactory, Searchable, HasSlug, InteractsWithMedia, HasTags;

    protected $guarded = ['id'];

    public function getSlugOptions(): SlugOptions
    {
      return SlugOptions::create()
        ->generateSlugsFrom(['first_name', 'last_name'])
        ->saveSlugsTo('slug')
        ->doNotGenerateSlugsOnUpdate();
    }

    public function getRouteKeyName(): string
    {
      return 'slug';
    }

    public function registerMediaCollections(): void
    {
      $this->addMediaCollection('avatar')->singleFile();
      $this->addMediaCollection('gallery');
    }

    public function registerMediaConversions(Media $media = null): void
    {
      $this->addMediaConversion('webp')
        ->format('webp')
        ->performOnCollections('avatar');

      $this->addMediaConversion('webp')
        ->format('webp')
        ->performOnCollections('gallery');
    }


    public function videos(): HasMany
    {
      return $this->hasMany(Video::class);
    }


    public function faqs(): HasMany
    {
      return $this->hasMany(Faq::class);
    }

    public function location(): BelongsTo
    {
      return $this->belongsTo(Location::class);
    }

    public function toSearchableArray(): array
    {
      $array = $this->toArray();
      $array['location'] = $this->location?->name;
      return $array;
    }

    public function categories(): BelongsToMany
    {
      return $this->belongsToMany(Category::class, 'categories_speakers');
    }


    public function topics(): BelongsToMany
    {
      return $this->belongsToMany(Topic::class, 'speaker_topics');
    }


    public function blogs(): HasMany
    {
      return $this->hasMany(Blog::class);
    }

  }
