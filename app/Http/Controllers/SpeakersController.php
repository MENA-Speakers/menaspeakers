<?php

namespace App\Http\Controllers;

use App\Http\Resources\SpeakerResource;
use App\Imports\BlogImport;
use App\Imports\SpeakerImport;
use App\Models\Speaker;
use Artesaos\SEOTools\Facades\JsonLdMulti;
use Artesaos\SEOTools\Facades\SEOTools;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class SpeakersController extends Controller
{

  public function index(Request $request){

    $speakers = null;
    $query = null;
    if($request->has('query')){
       $speakers = Speaker::search($request->input('query'))->paginate(12)->withQueryString();
       $query = $request->input('query');
    } else {
      $speakers = Speaker::latest()->paginate(12);
    }

    return Inertia::render('Speakers/Index', [
      'speakers' => SpeakerResource::collection($speakers),
      'query' => $query
    ]);
  }

  public function show(Speaker $speaker){

    SEOTools::setTitle($speaker->meta_title);
    SEOTools::setDescription($speaker->meta_description);
    SEOTools::opengraph()->setUrl(route('speakers.show', $speaker->slug));
    SEOTools::opengraph()->addProperty('type', 'person');
    SEOTools::twitter()->setSite('@menaspeakers');
    SEOTools::jsonLd()->addImage($speaker->getFirstMediaUrl('avatar'));
    return Inertia::render('Speakers/Show', [
      'speaker' => new SpeakerResource($speaker)
    ]);
  }

}
