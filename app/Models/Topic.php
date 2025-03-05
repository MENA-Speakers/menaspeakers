<?php

  /**
   * The Topic model represents a topic entity in the application.
   *
   * This model provides methods to handle slug generation,
   * define relationships with speakers, and manage media collections/conversions.
   * Implements the `HasMedia` interface for media library functionalities.
   */

  namespace App\Models;

  use /**
   * Trait HasFactory
   *
   * A Laravel Eloquent trait that provides a factory method for model instances.
   * This trait is typically used in Laravel applications to interact with
   * model factories, which aid in generating test data or seeding databases.
   */
    Illuminate\Database\Eloquent\Factories\HasFactory;
  use /**
   * The base Eloquent model for the Laravel application.
   *
   * This serves as the foundational model class for the application, providing
   * interaction with the MySQL database configured for the app. Extend this class
   * to define specific database models for the application.
   *
   * Features:
   * - Utilizes Laravel's Eloquent ORM for database interactions.
   * - Facilitates CRUD operations and query building.
   * - Works with relationships, scopes, and attribute accessors/mutators.
   * - Handles events, observers, and model lifecycle hooks.
   *
   * Notes:
   * - Laravel version: 11.9.2
   * - App name: MENA Speakers
   * - Database used: MySQL
   * - Queue connection: sync
   *
   * @see Illuminate\Database\Eloquent\Model\Base
   */
    Illuminate\Database\Eloquent\Model;
  use /**
   * Define a many-to-many relationship.
   *
   * This relationship is used to associate models in a many-to-many link table.
   * Through this method, the intermediate tables can be defined and manipulated
   * for binding relationships such as tags, categories, or permissions.
   *
   * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
   */
    Illuminate\Database\Eloquent\Relations\BelongsToMany;
  use /**
   * Interface Spatie\MediaLibrary\HasMedia
   *
   * This interface is part of the Spatie Media Library package and is used to indicate that a model supports media collections.
   * Implementing this interface allows the model to interact with Spatie Media Library features, such as associating media files
   * with the model and managing those media files.
   *
   * Applications using this feature can define media collections and interact with media items stored using Media Library.
   * Functions typically include attaching, retrieving, and managing media files.
   *
   * For use cases such as storing images, videos, or other files linked to model instances using the Spatie Media Library,
   * this interface lays the groundwork to provide compatibility.
   *
   * @see https://spatie.be/docs/laravel-medialibrary
   * @package Spatie\MediaLibrary
   */
    Spatie\MediaLibrary\HasMedia;
  use /**
   * This trait is part of the Spatie Media Library package and is used to handle
   * media collections and file manipulations such as adding, removing, or updating media
   * associated with the model that implements this trait.
   *
   * It provides methods for managing media conversions, file storage, and retrieval
   * from specified media collections. The trait should be used within an Eloquent model
   * to manage media relationships and interactions seamlessly.
   *
   * Key functionalities:
   * - Attaching files to media collections.
   * - Managing conversions (e.g., resizing images).
   * - Accessing and retrieving files stored in various media collections.
   *
   * Note:
   * - Ensure the database has the necessary tables for Spatie Media Library's functionality.
   * - Configure the media collections and applicable conversions in the implementing model.
   */
    Spatie\MediaLibrary\InteractsWithMedia;
  use /**
   * The Media class represents a model utilized by Spatie's Media Library package.
   * It is used to handle media files such as images, videos, and other attachments.
   *
   * This model is tied to the `media` table in the database provided by the package's migrations.
   * It contains information about the file, including its path, size, type, conversions, and disk storage location.
   *
   * Key functionalities:
   * - Linking media files to Eloquent models.
   * - Generating responsive images and conversions.
   * - Handling multiple file types with defined collections.
   * - Storing files on specified disks.
   *
   * This class extends Laravel's `Illuminate\Database\Eloquent\Model`, providing access to standard
   * Eloquent ORM functionalities alongside Spatie's Media Library-specific methods.
   *
   * For further customization, users can override or extend this model if necessary.
   */
    Spatie\MediaLibrary\MediaCollections\Models\Media;
  use /**
   * Trait HasSlug
   *
   * This trait is part of the Spatie\Sluggable package and is used to apply
   * sluggable behavior to an Eloquent model within the Laravel application.
   *
   * The trait enables automatic generation of URL-friendly "slug" identifiers
   * for specific attributes, making them suitable for use in web URLs or other
   * contexts where unique, readable identifiers are required.
   *
   * By integrating this class into a model, developers can specify which
   * attribute should be used to generate the slug, control its behavior, and
   * configure additional options provided by the Spatie\Sluggable package.
   *
   * Note: This requires Spatie\Sluggable to be installed and properly configured
   * in the Laravel project ('MENA Speakers') to function as expected.
   *
   * Typical Use:
   * - Automatically generate slugs during model save/update events.
   * - Maintain friendly URL formats within the application.
   *
   * Dependencies:
   * - Ensure the Spatie\Sluggable package is installed via Composer.
   * - MySQL database linked to the Laravel application settings.
   *
   * @package Spatie\Sluggable
   */
    Spatie\Sluggable\HasSlug;
  use /**
   * The `Spatie\Sluggable\SlugOptions` class provides a structured way to define the configuration for generating slugs.
   * It is commonly used in Laravel applications to handle customizable slug generation for Eloquent models.
   *
   * With `SlugOptions`, you can specify the source field(s) for the slug, the target field to store the slug,
   * and additional options such as uniqueness enforcement, slug separator, language-specific handling, etc.
   *
   * This package is particularly useful when working with models where SEO-friendly URLs or unique identifiers are needed,
   * as it ensures consistent and reliable slug generation.
   *
   * Features:
   * - Define one or multiple source fields for a slug.
   * - Set the destination field in the model where the slug will be stored.
   * - Automatically handle slug uniqueness by appending incremented suffixes when duplicates are detected.
   * - Customize the slug generation with language-specific rules, separators, or custom slugging functions.
   * - Integrates seamlessly with Eloquent events to automatically generate slugs upon model creation or updates.
   *
   * Note: Ensure the package is installed in your Laravel application as part of the `spatie/laravel-sluggable` package.
   */
    Spatie\Sluggable\SlugOptions;

  /**
   *
   */
  class Topic extends Model implements HasMedia
  {
    use HasFactory, InteractsWithMedia, HasSlug;

    protected $guarded = ['id'];

    /**
     * Get the options for generating the slug.
     *
     * This method configures the slug generation options for the Topic model.
     * It specifies the source attribute for the slug, the destination attribute
     * where the slug will be saved, and ensures that slugs are not regenerated on update.
     *
     * @return SlugOptions
     */
    function getSlugOptions(): SlugOptions
    {
      return SlugOptions::create()
        ->generateSlugsFrom('name') // Generate slugs from the 'name' attribute
        ->saveSlugsTo('slug') // Save the generated slug to the 'slug' attribute
        ->doNotGenerateSlugsOnUpdate(); // Do not regenerate slugs when the model is updated
    }

    /**
     * Get the route key for the model.
     *
     * This method overrides the default route key name used by Laravel
     * to look up the model by the 'slug' attribute instead of the 'id'.
     *
     * @return string
     */
    function getRouteKeyName(): string
    {
      return 'slug';
    }

    /**
     * The speakers that belong to the topic.
     *
     * This method defines a many-to-many relationship between the Topic and Speaker models.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function speakers(): BelongsToMany
    {
      return $this->belongsToMany(Speaker::class, 'speaker_topics');
    }

    /**
     * Register the media collections.
     *
     * This method defines the media collections that the model can have.
     * It specifies that the 'image' collection can hold multiple files.
     *
     * @return void
     */
    public function registerMediaCollections(): void
    {
      $this->addMediaCollection('image');
    }

    /**
     * Register the media conversions.
     *
     * This method defines the conversions that should be performed on media
     * items in the specified collections. It converts media to the 'webp' format
     * for the 'image' collection.
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
