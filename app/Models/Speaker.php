<?php

  /**
   * Class Speaker
   *
   * Represents the Speaker model within the application.
   * This model utilizes Laravel, Spatie packages, and Laravel Scout features.
   * Provides relationships, media handling, slug generation, and search indexing functionalities.
   *
   * Implements:
   * - HasMedia: For managing media collections and conversions.
   *
   * Traits:
   * - HasFactory: For enabling model factories.
   * - Searchable: For making the model searchable using Laravel Scout.
   * - HasSlug: For handling slug generation.
   * - InteractsWithMedia: For interacting with Spatie Media Library.
   * - HasTags: For managing tags associated with the model.
   *
   * Guarded:
   * - `$guarded`: Prevents mass assignment for the `id` attribute.
   */

  namespace App\Models;

  use /**
   * Trait HasFactory
   *
   * Provides factory methods for Eloquent models in the Laravel application.
   * This trait facilitates the use of model factories, which are useful for
   * generating and seeding database records in a convenient manner. It includes
   * methods necessary for the seamless creation of model instances using factories.
   *
   * This is commonly used in model classes to enable the use of `factory()` methods.
   *
   * Note: Ensure that the model factory definitions are properly created and
   * registered in the application before utilizing this functionality.
   */
    Illuminate\Database\Eloquent\Factories\HasFactory;
  use /**
   * Class MENA Speakers
   *
   * This class represents an Eloquent model in the Laravel application.
   * It interacts with the MySQL database and adheres to Laravel's Eloquent ORM standards.
   *
   * The Laravel application's default queue connection used is 'sync'.
   *
   * @package App\Models
   * @extends Illuminate\Database\Eloquent\Model
   */
    Illuminate\Database\Eloquent\Model;
  use /**
   * Define an inverse one-to-one or many relationship.
   *
   * This relationship indicates that the current model belongs to another model.
   * The method typically returns an instance of Illuminate\Database\Eloquent\Relations\BelongsTo.
   *
   * @param string $related The related model's class name.
   * @param string|null $foreignKey The foreign key of the related model.
   * @param string|null $ownerKey The associated key on the parent model.
   * @param string|null $relation The relationship name.
   *
   * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
   */
    Illuminate\Database\Eloquent\Relations\BelongsTo;
  use /**
   * Define a many-to-many relationship.
   *
   * The BelongsToMany relation represents associations where records in one table are related
   * to multiple records in another table and vice versa. It is commonly used for pivot tables
   * to handle relations like tags, roles, or categories.
   *
   * This function allows the specification of the intermediary table, foreign and related keys,
   * as well as additional constraints or customizations.
   *
   * Methods often used with BelongsToMany include:
   * - withPivot(): For selecting extra columns from the pivot table.
   * - using(): For defining a custom Pivot model.
   * - as(): To rename the relationship name.
   * - withTimestamps(): For automatically managing created_at and updated_at on the pivot record.
   * - attach() / detach(): To manage relationship data dynamically.
   * - sync(): To synchronize relationships with only specified entries.
   * - toggle(): To alternate between attaching or detaching records.
   *
   * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
   */
    Illuminate\Database\Eloquent\Relations\BelongsToMany;
  use /**
   * Define a one-to-many relationship.
   *
   * This function is used to define a one-to-many relationship between two models.
   * It returns an instance of HasMany indicating the related model and how the relationship is structured.
   *
   * @return \Illuminate\Database\Eloquent\Relations\HasMany
   */
    Illuminate\Database\Eloquent\Relations\HasMany;
  use /**
   * Class MorphToMany
   *
   * This class represents a polymorphic many-to-many relationship.
   * It is used for defining relationships between models, allowing a model to belong to multiple other models
   * on a single relationship while utilizing polymorphism to determine the associated model type.
   *
   * Polymorphic relationships allow for a flexible relationship between models by storing the model's type
   * and ID in the pivot table, letting the relationship point to multiple different models.
   *
   * Usage within an Eloquent model allows the definition of accessors, mutators, or query scope methods
   * tied to polymorphic many-to-many relationships.
   *
   * Important Notes:
   * - The relationship typically requires a pivot table with corresponding `type` and `id` fields for polymorphism.
   * - Methods specific to MorphToMany include manipulation of associated models, constraints, filtering, or retrieving.
   *
   * @see https://laravel.com/docs/eloquent-relationships#many-to-many-polymorphic-relations
   * @package Illuminate\Database\Eloquent\Relations
   * @extends Illuminate\Database\Eloquent\Relations\Relation
   */
    Illuminate\Database\Eloquent\Relations\MorphToMany;
  use /**
   * Trait used to incorporate full-text search capabilities in Laravel models utilizing Laravel Scout.
   *
   * This trait is implemented to integrate models with a search engine via Laravel Scout. It facilitates
   * the indexing of model records and the ability to perform search queries against the indexed data.
   * The trait should be used only with models configured for search functionality.
   *
   * Requirements:
   * - The application must be configured to use Laravel Scout.
   * - Necessary configurations for the chosen search driver must be implemented.
   *
   * Features provided:
   * - Indexing of model data to a compatible search engine backend.
   * - Search functionality directly on the model utilizing Laravel Scout's query builder methods.
   *
   * Recommended Usage:
   * - Implement this trait only if search capabilities are required within the application.
   * - Ensure database synchronization with the search engine indexing to maintain data consistency.
   */
    Laravel\Scout\Searchable;
  use /**
   * Interface Spatie\MediaLibrary\HasMedia
   *
   * This interface must be implemented by models that require support for media handling
   * using the Spatie Media Library package in a Laravel application.
   *
   * Implementation of this interface allows a model to associate, manage,
   * and retrieve media items, such as images, videos, or other files.
   *
   * Usage of the Media Library can include attaching media to models,
   * defining media collections, and transforming media for specific
   * output requirements.
   *
   * For full functionality, the implementing class should also use
   * the Spatie\MediaLibrary\InteractsWithMedia trait.
   *
   * The application "MENA Speakers" makes use of this interface
   * while connecting to a MySQL database. Queues are processed
   * synchronously using the `sync` queue driver.
   *
   * Spatie Media Library plays a vital role when dealing with media
   * file storage, conversions, and transformations in this Laravel 11 application.
   */
    Spatie\MediaLibrary\HasMedia;
  use /**
   * Trait InteractsWithMedia
   *
   * This trait is part of the Spatie Media Library package and is used to attach, detach, manage, and retrieve media for a model.
   * It provides helper methods to interact with the media library and manage media associations.
   *
   * Usage of this trait enables the model to work seamlessly with Spatie Media Library functionality.
   *
   * Key Features:
   * - Attaching and detaching media files.
   * - Retrieving associated media collections.
   * - Handling conversions, responsive images, and other media-related operations.
   *
   * Make sure the associated model implements the `Spatie\MediaLibrary\HasMedia` interface for full functionality.
   *
   * Ensure the required database structure for Spatie Media Library is migrated and configured correctly.
   *
   * Notes:
   * - The application utilizes the `sync` queue driver, ensuring media-related processes are handled immediately.
   * - The database system in use is MySQL.
   */
    Spatie\MediaLibrary\InteractsWithMedia;
  use /**
   * The Media class provided by Spatie's MediaLibrary package.
   *
   * This class represents a single media item in the application, allowing users
   * to associate files (e.g., images, videos, documents) with Eloquent models.
   * It handles file upload, storage, retrieval, and conversion for media items within
   * the Laravel application.
   *
   * This class includes methods for manipulating and interacting with media items,
   * including but not limited to:
   * - Accessing the file path and URLs.
   * - Generating file conversions.
   * - Handling collections and media groups.
   * - Associating media with models.
   * - Managing media attributes like manipulations and custom properties.
   *
   * This class extends an Eloquent model that facilitates database interaction
   * for storing and retrieving media-related metadata.
   *
   * Example applications for media usage:
   * - User profile pictures.
   * - Blog post images.
   * - File attachments for resources or entities.
   *
   * Note: Ensure the application's configuration (e.g., `media-library.php`) is
   * properly set up for storage paths, disk usage, and conversion handling.
   */
    Spatie\MediaLibrary\MediaCollections\Models\Media;
  use /**
   * Class uses Spatie\Sluggable\HasSlug trait to generate and manage slugs.
   *
   * This functionality is utilized to automatically create unique slugs for the
   * specified attributes in models. It ensures that the resulting slugs are URL-friendly
   * and unique in the context defined.
   *
   * Laravel Version: v11.9.2
   * Application: MENA Speakers
   * Database: MySQL
   * Queue Connection: sync
   */
    Spatie\Sluggable\HasSlug;
  use /**
   * Class SlugOptions
   *
   * This class is utilized for configuring the behavior of slugs in the application.
   * It is part of the `spatie/laravel-sluggable` package and helps in generating slugs
   * for Eloquent models.
   *
   * Key functionalities provided by this class include:
   * - Customizing the source attributes for generating the slug.
   * - Setting unique slug constraints.
   * - Resolving slug conflicts.
   * - Using specific separators for slugs.
   * - Supporting suffixes or prefixes for generated slugs.
   *
   * The `SlugOptions` class is typically applied to models by invoking it within the
   * `getSlugOptions()` method of a model class.
   *
   * @package Spatie\Sluggable
   */
    Spatie\Sluggable\SlugOptions;
  use /**
   * Trait Spatie\Tags\HasTags
   *
   * This trait provides functionality to associate tags with models in a Laravel application.
   * It is commonly used for content categorization, organization, or tagging purposes.
   *
   * Functionality:
   * - Attaches taggable behavior to a model.
   * - Provides methods for adding, removing, and accessing tags.
   * - Supports translations, tag types, and normalized tags.
   *
   * Requirements:
   * - The model using this trait must implement Spatie\Tags\HasTags interface.
   * - A valid database table for storing tags and tag associations.
   *
   * Dependencies:
   * - Spatie package for tags management must be installed and properly configured.
   * - Ensure database migrations for tags and related pivot tables have been executed.
   *
   * Usage:
   * - Use this trait in an Eloquent model to enable tag-related functionalities.
   * - Leverages Spatie\Tags\Tag model for creating, retrieving, and organizing tags.
   *
   * Configuration:
   * - Adjust the configuration file (config/tags.php) to define tag-related settings.
   */
    Spatie\Tags\HasTags;

  /**
   * Represents a speaker with various relationships and functionality.
   *
   * Implements the HasMedia interface for managing media.
   */
  class Speaker extends Model implements HasMedia
  {
    use HasFactory, Searchable, HasSlug, InteractsWithMedia, HasTags;

    protected $guarded = ['id'];

    /**
     * Get the options for generating the slug.
     *
     * This method configures the slug generation options for the Speaker model.
     * It specifies the source attributes for the slug, the destination attribute
     * where the slug will be saved, and ensures that slugs are not regenerated on update.
     *
     * @return \Spatie\Sluggable\SlugOptions
     */
    public function getSlugOptions(): SlugOptions
    {
      return SlugOptions::create()
        ->generateSlugsFrom(['first_name', 'last_name']) // Generate slugs from the first_name and last_name attributes
        ->saveSlugsTo('slug') // Save the generated slug to the slug attribute
        ->doNotGenerateSlugsOnUpdate(); // Do not regenerate slugs when the model is updated
    }

    /**
     * Get the route key name for Laravel routing.
     *
     * This method overrides the default route key name used by Laravel
     * to look up the model by the 'slug' attribute instead of the 'id'.
     *
     * @return string
     */
    public function getRouteKeyName(): string
    {
      return 'slug';
    }

    /**
     * Register the media collections for the Speaker model.
     *
     * This method defines the media collections that the model can have.
     * It specifies that the 'avatar' collection should only hold a single file,
     * while the 'gallery' collection can hold multiple files.
     *
     * @return void
     */
    public function registerMediaCollections(): void
    {
      $this->addMediaCollection('avatar')->singleFile();
      $this->addMediaCollection('gallery');
    }

    /**
     * Register the media conversions for the Speaker model.
     *
     * This method defines the conversions that should be performed on media
     * items in the specified collections. It converts media to the 'webp' format
     * for both 'avatar' and 'gallery' collections.
     *
     * @param \Spatie\MediaLibrary\MediaCollections\Models\Media|null $media
     *
     * @return void
     */
    public function registerMediaConversions(Media $media = null): void
    {
      $this->addMediaConversion('webp')
        ->format('webp')
        ->performOnCollections('avatar');

      $this->addMediaConversion('webp')
        ->format('webp')
        ->performOnCollections('gallery');
    }

    /**
     * Define a one-to-many relationship with the Video model.
     *
     * This method indicates that a speaker can have multiple videos.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function videos(): HasMany
    {
      return $this->hasMany(Video::class);
    }

    /**
     * Define a one-to-many relationship with the Faq model.
     *
     * This method indicates that a speaker can have multiple FAQs.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function faqs(): HasMany
    {
      return $this->hasMany(Faq::class);
    }

    /**
     * Define an inverse one-to-one or many relationship with the Location model.
     *
     * This method indicates that a speaker belongs to a location.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function location(): BelongsTo
    {
      return $this->belongsTo(Location::class);
    }

    /**
     * Convert the model instance to an array for search indexing.
     *
     * This method customizes the array representation of the model
     * for search indexing purposes, including the location name.
     *
     * @return array
     */
    public function toSearchableArray(): array
    {
      $array = $this->toArray();
      $array['location'] = $this->location?->name;
      return $array;
    }

    /**
     * Define a many-to-many relationship with the Category model.
     *
     * This method indicates that a speaker can belong to multiple categories.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function categories(): BelongsToMany
    {
      return $this->belongsToMany(Category::class, 'categories_speakers');
    }

    /**
     * Define a many-to-many relationship with the Topic model.
     *
     * This method indicates that a speaker can belong to multiple topics.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function topics(): BelongsToMany
    {
      return $this->belongsToMany(Topic::class, 'speaker_topics');
    }

    /**
     * Define a one-to-many relationship with the Blog model.
     *
     * This method indicates that a speaker can have multiple blogs.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function blogs(): HasMany
    {
      return $this->hasMany(Blog::class);
    }
  }
