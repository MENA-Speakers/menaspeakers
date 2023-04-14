<?php

namespace App\Console\Commands;

use App\Models\Image;
use App\Models\Blog;
use App\Models\Speaker;
use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class GenerateSitemap extends Command
{
  /**
   * The name and signature of the console command.
   *
   * @var string
   */
  protected $signature = 'sitemap:generate';

  /**
   * The console command description.
   *
   * @var string
   */
  protected $description = 'Generate Site Map';

  /**
   * Execute the console command.
   *
   * @return int
   */
  public function handle()
  {
    // Generate Site Map
    $sitemap = Sitemap::create()
      ->add(Url::create('/'))
      ->add(Url::create('/about'))
      ->add(Url::create('/speakers'))
      ->add(Url::create('/gallery'))
      ->add(Url::create('/blogs'))
      ->add(Url::create('/page/contact'))
      ->add(Url::create('/terms'))
      ->add(Url::create('/privacy'))
      ->add(Url::create('/FAQs'))
      ->add(Url::create('/page/refund-policy'))
      ->add(Url::create('/page/contact'))
      ->add(Url::create('/profile'))
      ->add(Url::create('/profile-arabic'));

    // Get all speakers
    Speaker::all()->each(function ($speaker) use ($sitemap) {
      $sitemap->add(Url::create('/speakers/' . $speaker->slug));
      $images = $speaker->getMedia('avatar');
      foreach ($images as $image) {
        $url = Url::create($image->getUrl())
          ->setLastModificationDate($speaker->updated_at)
          ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
          ->setPriority(1);
        $sitemap->add($url);
      }
    });

    // Blogs
    Blog::all()->each(function ($blog) use ($sitemap) {
      $sitemap->add(Url::create('/blogs/' . $blog->slug));
      $images = $blog->getMedia('image');
      foreach ($images as $image) {
        $url = Url::create($image->getUrl())
          ->setLastModificationDate($blog->updated_at)
          ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
          ->setPriority(0.9);
        $sitemap->add($url);
      }
    });

    // Get all gallery images
    Image::all()->each(function ($image) use ($sitemap) {
      $url = Url::create($image->getFirstMediaUrl('image'))
        ->setLastModificationDate($image->updated_at)
        ->setChangeFrequency(Url::CHANGE_FREQUENCY_DAILY)
        ->setPriority(0.8);
      $sitemap->add($url);
    });

    $sitemap->writeToFile(public_path('sitemap.xml'));
  }
}
