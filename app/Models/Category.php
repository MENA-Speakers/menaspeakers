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
     * This method configures the options for generating slugs for the Category model.
     * It specifies that slugs should be generated from the 'name' attribute and saved
     * to the 'slug' attribute. Additionally, it prevents slugs from being regenerated on update.
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
     * This method returns the column name that should be used for route model binding.
     * In this case, it returns the 'slug' column.
     *
     * @return string
     */
    function getRouteKeyName(): string
    {
      return 'slug';
    }


    /**
     * The speakers that belong to the category.
     *
     * This method defines a many-to-many relationship between the Category and Speaker models.
     * It uses the 'categories_speakers' pivot table to establish the relationship.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function speakers(): BelongsToMany
    {
      return $this->belongsToMany(Speaker::class, 'categories_speakers');
    }


    /**
     * Register media collections for the model.
     *
     * This method defines a media collection named 'image'.
     *
     * @return void
     */
    public function registerMediaCollections(): void
    {
      $this->addMediaCollection('image');
    }


    /**
     * Register the media conversions using media library.
     *
     * This method defines a media conversion that converts images to the 'webp' format.
     * The conversion is performed on the 'image' media collection.
     *
     * @param \Spatie\MediaLibrary\MediaCollections\Models\Media|null $media
     *
     * @return void
     */
    public function registerMediaConversions(Media $media = null): void
    {
      $this->addMediaConversion('webp')
        ->format('webp')
        ->performOnCollections('image');
    }
  }
