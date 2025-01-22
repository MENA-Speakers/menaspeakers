<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogResource;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\ImageResource;
use App\Http\Resources\ProfileResource;
use App\Http\Resources\SpeakerResource;
use App\Http\Resources\TopicResource;
use App\Mail\BirthdayEmail;
use App\Models\Blog;
use App\Models\Category;
use App\Models\Faq;
use App\Models\Image;
use App\Models\Profile;
use App\Models\Speaker;
use App\Models\Testimonial;
use App\Models\Topic;
use Artesaos\SEOTools\Facades\SEOTools;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class HomeController extends Controller
{

  public function index()
  {

    SEOTools::setTitle('The leading speakers bureau in the MENA Region');
    SEOTools::setDescription("The leading speakers bureau in the MENA Region for corporations and governments, providing Keynote Speakers for Corporate and Professional Events.");
    SEOTools::opengraph()->setUrl(route('index'));
    SEOTools::opengraph()->addProperty('type', 'person');
    SEOTools::twitter()->setSite('@menaspeakers');
    SEOTools::jsonLd()->addImage('https://mena-speakers.com/images/mena-speakers-logo.webp');

    $speakers = Speaker::where('featured', true)->inRandomOrder()->limit(10)->get();
    $heroSpeakers = Speaker::limit(12)->get();
    $blogs = Blog::latest()->limit(4)->get();
    $faqs = Faq::where('speaker_id', null)->get();
    $testimonials = Testimonial::latest()->limit(12)->get();

    $categories = Category::inRandomOrder()
      ->limit(4)
      ->get();

    $topics = Topic::inRandomOrder()
      ->limit(8)
      ->get();

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
