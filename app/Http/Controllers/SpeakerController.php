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

class SpeakerController extends Controller
{

  /**
   * Displays the main index page for speakers, allowing filtering and searching functionality.
   *
   * Sets the SEO title and description for the Speakers page to optimize for search engines.
   * If a query parameter is provided in the request, it performs a search on the speakers' database and paginates the results.
   * Otherwise, retrieves all speakers, ordering with the most recent ones first and paginates.
   * Additionally, retrieves, formats, and provides topics, categories, and locations data to support filtering options on the frontend.
   * Renders the speakers' index page in the 'Speakers/Index' Inertia view with the provided data.
   *
   * @param Request $request The incoming HTTP request containing optional query parameters for filtering.
   *
   * @return \Inertia\Response The rendered Inertia view for the speakers' index page.
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


  /**
   * Displays the details of a given speaker including their metadata for SEO purposes.
   *
   * Sets the SEO title, description, Open Graph URL, Open Graph type, Twitter site information,
   * and JSON-LD image for structured data enhancement.
   * Renders the speaker's details in the 'Speakers/Show' Inertia view using the SpeakerResource.
   *
   * @param Speaker $speaker The speaker whose details are to be displayed.
   *
   * @return \Inertia\Response The rendered Inertia view for the speaker details.
   */
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
