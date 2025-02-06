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

/**
 * Display a listing of the speakers.
 *
 * @param \Illuminate\Http\Request $request
 * @return \Inertia\Response
 */
public function index(Request $request){

  // Set SEO title and description for the speakers page
  SEOTools::setTitle('Speakers | MENA Speakers');
  SEOTools::setDescription("Explore our curated list of dynamic speakers at MENA Speakers. Find professional keynote speakers, MCs, and corporate trainers tailored for your event's needs in the Middle East region");

  // Check if the request has a query parameter
  if($request->hasAny([
    'query',
  ])){
    // Search speakers based on the query and paginate the results
    $result = Speaker::search($request->input('query'))->paginate(12)->withQueryString();
  }else {
    // Return all speakers if no query, featured first
    $result = Speaker::latest()->paginate(12);;
  }

  // Retrieve all topics and format them for the frontend
  $topics = Topic::all()->map(function($topic) {
    return [
      'value' => $topic->id,
      'label' => $topic->name,
    ];
  });

  // Retrieve all categories and format them for the frontend
  $categories = Category::all()->map(function($category) {
    return [
      'value' => $category->id,
      'label' => $category->name,
    ];
  });

  // Retrieve all locations and format them for the frontend
  $locations = Location::all()->map(function($location) {
    return [
      'value' => $location->id,
      'label' => $location->name,
    ];
  });

  // Render the speakers index page with the retrieved data
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
