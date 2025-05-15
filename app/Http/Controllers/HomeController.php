<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogResource;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\ImageResource;
use App\Http\Resources\SpeakerResource;
use App\Http\Resources\TopicResource;
use App\Models\Blog;
use App\Models\Category;
use App\Models\Faq;
use App\Models\Image;
use App\Models\Speaker;
use App\Models\Testimonial;
use App\Models\Topic;
use Artesaos\SEOTools\Facades\SEOTools;
use Inertia\Inertia;

class HomeController extends Controller
{

  /**
   * Display the homepage with various resources.
   *
   * This method sets the SEO metadata for the homepage and retrieves various
   * resources such as featured speakers, hero speakers, latest blogs, FAQs,
   * testimonials, categories, and topics. It then renders the 'Index' view
   * with these resources.
   *
   * @return \Inertia\Response
   */
  public function index()
  {
    // Set SEO metadata for the homepage
    SEOTools::setTitle('The leading speakers bureau in the MENA Region');
    SEOTools::setDescription("The leading speakers bureau in the MENA Region for corporations and governments, providing Keynote Speakers for Corporate and Professional Events.");
    SEOTools::opengraph()->setUrl(route('index'));
    SEOTools::opengraph()->addProperty('type', 'person');
    SEOTools::twitter()->setSite('@menaspeakers');
    SEOTools::jsonLd()->addImage('https://mena-speakers.com/images/mena-speakers-logo.webp');

    // Retrieve featured speakers, hero speakers, latest blogs, FAQs, and testimonials
    $speakers = Speaker::where('featured', true)->inRandomOrder()->limit(10)->get();
    $heroSpeakers = Speaker::limit(12)->get();
    $blogs = Blog::latest()->limit(4)->get();
    $faqs = Faq::where('speaker_id', null)->get();
    $testimonials = Testimonial::latest()->limit(12)->get();

    // Retrieve categories with speaker count and a random speaker image
    $categories = Category::withCount('speakers')
      ->orderBy('speakers_count', 'desc')
      ->limit(4)
      ->get();

    // Add a random speaker image to each category
    foreach ($categories as $category) {
      $randomSpeaker = $category->speakers()->inRandomOrder()->first();
      $category->random_speaker_image = $randomSpeaker ? $randomSpeaker->getFirstMediaUrl('avatar') : null;
    }

    $topics = Topic::withCount('speakers')
      ->orderBy('speakers_count', 'desc')
      ->limit(4)
      ->get();

    // Render the 'Index' view with the retrieved resources
    return Inertia::render('Index', [
      'speakers'     => SpeakerResource::collection($speakers),
      'blogs'        => BlogResource::collection($blogs),
      'gallery'      => ImageResource::collection(Image::inRandomOrder()->limit(8)->get()),
      'faqs'         => $faqs,
      'categories'   => CategoryResource::collection($categories),
      'topics'       => TopicResource::collection($topics),
      'testimonials' => $testimonials,
      'heroSpeakers' => SpeakerResource::collection($heroSpeakers),
    ]);
  }
}
