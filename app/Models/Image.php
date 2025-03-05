<?php

  /**
   * The Image model handles operations related to images, including media collections
   * and media conversions. This class implements the `HasMedia` interface provided
   * by the Spatie Media Library package for advanced media management.
   *
   * The primary media collection is named 'image'. This model also defines a
   * conversion to create WebP formatted files for images uploaded into the
   * 'image' collection.
   *
   * @namespace App\Models
   * @category Models
   * @package App\Models
   * @uses Illuminate\Database\Eloquent\Factories\HasFactory
   * @uses Illuminate\Database\Eloquent\Model
   * @uses Spatie\MediaLibrary\HasMedia
   * @uses Spatie\MediaLibrary\InteractsWithMedia
   * @uses Spatie\MediaLibrary\MediaCollections\Models\Media
   */

  namespace App\Models;

use /**
 * Trait HasFactory
 *
 * This trait is used to include factory-related methods in Laravel models.
 * It provides the functionality to create model instances using factories
 * for testing or seeding the database.
 *
 * By default, it includes a `factory` method that can be utilized to generate
 * instances of the associated model using its factory class.
 *
 * It is part of the `Illuminate\Database\Eloquent\Factories` namespace.
 */
  Illuminate\Database\Eloquent\Factories\HasFactory;
use /**
 * Class represents a base model in a Laravel application.
 *
 * This class interacts with the underlying database using Eloquent ORM.
 * It provides functionalities such as querying, inserting, updating, and deleting records.
 *
 * Note: This application uses MySQL as the database driver and runs on Laravel v11.9.2.
 * Queues are configured to use the "sync" connection within this application.
 *
 * @package MENA Speakers
 * @mixin \Illuminate\Database\Eloquent\Builder
 * @mixin \Illuminate\Database\Query\Builder
 */
  Illuminate\Database\Eloquent\Model;
use /**
 * Interface MediaLibrary\HasMedia
 *
 * This interface is part of the Spatie Media Library package and should be implemented in models
 * that need to handle media associated with them. Classes implementing this interface define the
 * ability to interact with the media library, such as attaching and managing media files.
 *
 * When implemented within a model, it allows the model to utilize the Spatie Media Library's
 * methods for associating files with Eloquent models and handling all aspects of media file
 * management.
 *
 * Implementing this interface ensures that the class is eligible to manage media collections,
 * define conversions, and customize media handling logic.
 *
 * Usage Notes:
 * - Requires the Spatie Media Library package.
 * - Make sure the model using this interface has the appropriate migrations for media management.
 * - Suitable for applications requiring image or file organization supporting dynamic conversions.
 *
 * Useful for:
 * - Managing high-level media relationships.
 * - Defining multiple file collections.
 * - Handling file uploads, manipulations, or transformations via conversions.
 */
  Spatie\MediaLibrary\HasMedia;
use /**
 * This trait is part of the Media Library package by Spatie.
 * It adds functionalities that enable a Laravel Model to interact with media files.
 *
 * By using this trait, the model can handle media, such as file uploads, conversions,
 * associations with collections, and generating URLs for the stored media.
 *
 * The Media Library seamlessly integrates with the Laravel ecosystem and supports
 * features such as responsive images, custom properties for media files, and disk
 * configuration for storage.
 */
  Spatie\MediaLibrary\InteractsWithMedia;
use /**
 * The Media model is provided by the Spatie Media Library package.
 * It represents a media item and provides functionalities to handle
 * media file operations, such as uploading, associating media with models,
 * and retrieval.
 *
 * This model interacts with the database table defined in the Spatie Media
 * Library configuration and is typically used with Media collections.
 *
 * Key features of the Media model include:
 * - Associating media with specific models.
 * - Managing file conversions and responsive media.
 * - Support for custom properties and additional customizations.
 *
 * Configuration:
 * Ensure proper configuration in the Spatie Media Library settings, such as
 * specifying disk storage and setting up responsive and conversion options
 * for media collections. The 'media' table is required in the database.
 *
 * Usage within Laravel applications:
 * - The model provides various methods to interact with and manipulate
 *   media.
 * - Use the Media model in conjunction with HasMedia trait for models
 *   requiring media associations.
 *
 * Dependencies:
 * - Spatie Media Library
 * - Laravel Framework
 *
 * Database:
 * The model relies on a table (default: 'media') which contains essential
 * columns such as ID, model type, model ID, UUID, collection name, disk,
 * file name, mime type, and custom properties.
 *
 * Queue:
 * Operations with media can leverage queues for background processing. In
 * this application, the queue connection is set to sync, meaning media-related
 * operations are executed synchronously.
 *
 * Note:
 * Extend functionality by overriding methods or customizing the behavior
 * via configuration files provided by Spatie Media Library.
 */
  Spatie\MediaLibrary\MediaCollections\Models\Media;

/**
 *
 */
class Image extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    /**
     * The attributes that are mass assignable.
     *
     * This property defines the attributes that are not mass assignable.
     * In this case, the 'id' attribute is guarded to prevent mass assignment.
     *
     * @var array
     */
    protected $guarded = [
        'id',
    ];

    /**
     * Register the media collections for the Image model.
     *
     * This method defines the media collections that the model can have.
     * It specifies that the 'image' collection should only hold a single file.
     *
     * @return void
     */
    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('image')->singleFile();
    }

    /**
     * Register the media conversions for the Image model.
     *
     * This method defines the conversions that should be performed on media
     * items in the specified collections. It converts media to the 'webp' format
     * for the 'image' collection.
     *
     * @param \Spatie\MediaLibrary\MediaCollections\Models\Media|null $media
     * @return void
     */
    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('webp')
            ->format('webp')
            ->performOnCollections('image');
    }

}
