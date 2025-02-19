<?php

  namespace App\Models;

  use Illuminate\Database\Eloquent\Factories\HasFactory;
  use Illuminate\Database\Eloquent\Model;
  use Illuminate\Database\Eloquent\Relations\BelongsTo;
  use Illuminate\Database\Eloquent\Relations\BelongsToMany;
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

    /**
     * Get the options for generating the slug.
     *
     * This method configures the options for generating slugs for the Blog model.
     * It specifies that slugs should be generated from the 'title' attribute and saved
     * to the 'slug' attribute. Additionally, it prevents slugs from being regenerated on update.
     *
     * @return \Spatie\Sluggable\SlugOptions
     */
    function getSlugOptions(): SlugOptions
    {
      return SlugOptions::create()
        ->generateSlugsFrom('title')
        ->saveSlugsTo('slug')
        ->doNotGenerateSlugsOnUpdate();
    }


    /**
     * Get the route key name for the model.
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
     * Register media collections for the model.
     *
     * This method defines a media collection named 'image' that allows only a single file.
     *
     * @return void
     */
    public function registerMediaCollections(): void
    {
      $this->addMediaCollection('image')
        ->singleFile();
    }


    /**
     * Define a many-to-many relationship with the Category model.
     *
     * This method establishes a relationship where a blog can belong to multiple categories
     * and a category can have multiple blogs. The relationship is managed through the
     * 'blog_category' pivot table.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function categories(): BelongsToMany
    {
      return $this->belongsToMany(Category::class, 'blog_category');
    }


    public function author(): BelongsTo
    {
      return $this->belongsTo(Speaker::class, 'speaker_id');
    }

    /**
     * Register media conversions for the model.
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
