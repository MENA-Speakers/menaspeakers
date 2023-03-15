<?php

namespace App\Console\Commands;

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
    protected $signature = 'generate:sitemap';

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
        ->add(Url::create('/contact'))
        ->add(Url::create('/terms'))
        ->add(Url::create('/privacy'))
        ->add(Url::create('/refund'))
        ->add(Url::create('/profile'))
        ->add(Url::create('/profile-arabic'));

      // Get all speakers
      Speaker::all()->each(function($speaker) use ($sitemap){
        $sitemap->add(Url::create('/speakers/' . $speaker->slug));
      });

      // Blogs
      Blog::all()->each(function($blog) use ($sitemap){
        $sitemap->add(Url::create('/blogs/' . $blog->slug));
      } );

        $sitemap->writeToFile(public_path('sitemap.xml'));
    }
}
