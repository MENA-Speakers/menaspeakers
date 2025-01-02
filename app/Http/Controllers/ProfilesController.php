<?php

namespace App\Http\Controllers;

use App\Http\Resources\SpeakerResource;
use App\Models\Category;
use App\Models\Location;
use App\Models\Speaker;
use App\Models\Topic;
use Artesaos\SEOTools\Facades\SEOTools;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfilesController extends Controller
{

  public function index(Request $request){

    SEOTools::setTitle('Speakers | MENA Speakers');
    SEOTools::setDescription("Explore our curated list of dynamic speakers at MENA Speakers. Find professional keynote speakers, MCs, and corporate trainers tailored for your event's needs in the Middle East region");

    if($request->hasAny([
      'query',
    ])){

      $result = Speaker::search($request->input('query'))->paginate(12)->withQueryString();
    }else {
      // Return all speakers if no query, featured first
      $result = Speaker::orderBy('featured', "DESC" )->paginate(12)->withQueryString();

    }

    $topics = Topic::all()->map(function($topic) {
      return [
        'value' => $topic->id,
        'label' => $topic->name,
      ];
    });

    $categories = Category::all()->map(function($category) {
      return [
        'value' => $category->id,
        'label' => $category->name,
      ];
    });

    $locations = Location::all()->map(function($location) {
      return [
        'value' => $location->id,
        'label' => $location->name,
      ];
    });



    return Inertia::render('Speakers/Index', [
        'speakers' => SpeakerResource::collection($result),
        'query' => $request->input('query'),
        'locations' => $locations,
        'topics' => $topics,
        'categories' => $categories,
    ]);
  }

  public function show(Speaker $speaker){
    SEOTools::setTitle($speaker->first_name . ' ' . $speaker->last_name);
    SEOTools::setDescription($speaker->key_titles);
    SEOTools::opengraph()->setUrl(route('speakers.show', $speaker->slug));
    SEOTools::opengraph()->addProperty('type', 'person');
    SEOTools::twitter()->setSite('@menaspeakers');
    SEOTools::jsonLd()->addImage($speaker->getFirstMediaUrl('avatar', 'webp'));

    return Inertia::render('Speakers/Show', [
      'speaker' => new SpeakerResource($speaker)
    ]);
  }

}
