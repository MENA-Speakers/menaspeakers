<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProfileResource;
use App\Imports\BlogImport;
use App\Imports\SpeakerImport;
use App\Models\Location;
use App\Models\Profile;
use Artesaos\SEOTools\Facades\JsonLdMulti;
use Artesaos\SEOTools\Facades\SEOTools;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class ProfilesController extends Controller
{

  public function index(Request $request){

    $result = [];
    if($request->hasAny([
      'query',
    ])){
      $result = Profile::search($request->input('query'));
    }else {
      $result = Profile::oldest();
    }

    $locations = Location::all();

    return Inertia::render('Speakers/Index', [
        'speakers' => ProfileResource::collection($result->paginate(12)->withQueryString()),
        'query' => $request->input('query'),
        'locations' => $locations
    ]);
  }

  public function show(Profile $speaker){

    SEOTools::setTitle($speaker->meta_title);
    SEOTools::setDescription($speaker->meta_description);
    SEOTools::opengraph()->setUrl(route('speakers.show', $speaker->slug));
    SEOTools::opengraph()->addProperty('type', 'person');
    SEOTools::twitter()->setSite('@menaspeakers');
    SEOTools::jsonLd()->addImage($speaker->getFirstMediaUrl('avatar'));
    return Inertia::render('Speakers/Show', [
      'speaker' => new ProfileResource($speaker)
    ]);
  }

}
