# MENA Speakers

MENA Speakers is a leading speakers and MC corporation in the Middle East. This project provides a platform to manage
public speakers, MCs, and corporate trainers.

## Tech Stack

### Backend

- **PHP**: The core programming language used for backend development.
  - [PHP Documentation](https://www.php.net/docs.php)
- **Laravel**: A PHP framework used for building the backend.
  - [Laravel Documentation](https://laravel.com/docs)

### Frontend

- **JavaScript**: Used for client-side scripting.
  - [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **TypeScript**: A superset of JavaScript that adds static types.
  - [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- **React**: A JavaScript library for building user interfaces.
  - [React Documentation](https://reactjs.org/docs/getting-started.html)

### Package Managers

- **npm**: Node package manager used for managing JavaScript dependencies.
  - [npm Documentation](https://docs.npmjs.com/)
- **Composer**: Dependency manager for PHP.
  - [Composer Documentation](https://getcomposer.org/doc/)

### Additional Tools

- **Inertia.js**: A framework that allows you to create single-page apps using classic server-side routing and
  controllers.
  - [Inertia.js Documentation](https://inertiajs.com/)
- **SEOTools**: A package for managing SEO meta tags.
  - [SEOTools Documentation](https://github.com/artesaos/seotools)
- **Laravel Media Library**: A package for attaching files to Eloquent models.
  - [Laravel Media Library Documentation](https://spatie.be/docs/laravel-medialibrary/v9/introduction)

#### Example Usage Media Library

```php
//Reason for using this package is to attach files to eloquent models and retrieve them easily in the application

use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\Models\Media;

class Speaker extends Model implements HasMedia
{
    use HasMediaTrait;
}
```

#### Example adding media to a model

```php
$speaker = Speaker::find(1);
$speaker->addMedia($request->file('avatar'))->toMediaCollection('avatar');
```

#### Example retrieving media from a model

```php
$speaker = Speaker::find(1);
$speaker->getMedia('avatar');
```

### Sluggable

- **Sluggable**: A package for creating slugs for Eloquent models.
  - [Sluggable Documentation](https://github.com/spatie/laravel-sluggable)

#### Example Usage Sluggable

```php
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Speaker extends Model
{
    use HasSlug;

    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }
}
```

### Spatie SiteMap

- **Spatie SiteMap**: A package for generating sitemaps.
  - [Spatie SiteMap Documentation](https://github.com/spatie/laravel-sitemap)

#### Example Usage Spatie SiteMap

```php
use Spatie\Sitemap\SitemapGenerator;

SitemapGenerator::create('https://example.com')->writeToFile('sitemap.xml');
```

#### Artisan Command to generate sitemap

```php
php artisan sitemap:generate
```

### Algolia Search

- **Algolia Search**: A package for integrating Algolia search.
  - [Algolia Search Documentation](https://www.algolia.com/doc/)
  - [Algolia Laravel Documentation](https://www.algolia.com/doc/framework-integration/laravel/getting-started/)
  - [Algolia Laravel Scout Documentation](https://www.algolia.com/doc/framework-integration/laravel/scout/getting-started/)

#### Example Usage Algolia Search

```php
use Laravel\Scout\Searchable;

class Speaker extends Model
{
    use Searchable;
}
```

#### Artisan Command to import data to Algolia

```php
php artisan scout:import "App\Models\Speaker"
```

### Artesaos SEO Tools

- **Artesaos SEO Tools**: A package for managing SEO meta tags.
  - [Artesaos SEO Tools Documentation](https://github.com/artesaos/seotools)
  -

#### Example Usage Artesaos SEO Tools

```php

//this is added in app.blade.php which is the main layout file to generate the seo tags dynamically set in controllers or views

    {{--  SEO Generated --}}
    {!! SEOTools::generate() !!}

    {{--  end seo generated --}}


//this is added in the controller to set the seo tags dynamically
use SEO;

SEO::setTitle('Home');
SEO::setDescription('This is the home page');
SEO::opengraph()->setUrl('https://example.com');
SEO::twitter()->setSite('@site');
..........

```

## Models

### Speaker

Represents a speaker in the system.

### Blog

Represents a blog post in the system.

### Media

Represents a media file in the system.

### Topics

Represents a topic in the system.

### Videos

Represents a video in the system.

### Testimonials

Represents a testimonial in the system.

### FAQ

Represents a frequently asked question in the system.

### Routes

#### Web Routes

- **GET /about**: Displays the About Us page.
- **GET /terms**: Displays the Terms and Conditions page.
- **GET /policy**: Displays the Refund Policy page.
- **GET /contact**: Displays the Contact page.
- **GET /profile**: Displays the Profile page.
- **GET /profile-arabic**: Displays the Profile page in Arabic.

## Admin Panel

The admin panel allows administrators to manage speakers, events, and other related data.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/mena-speakers.git
   cd mena-speakers
