<?php

namespace App\Http\Controllers;

use App\Imports\BlogImport;
use App\Imports\SpeakerImport;
use App\Models\Speaker;
use Artesaos\SEOTools\Facades\JsonLdMulti;
use Artesaos\SEOTools\Facades\SEOTools;
use Illuminate\Http\Request;
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

    return view('speakers.index', compact('speakers', 'query'));
  }

  public function show(Speaker $speaker){

    SEOTools::setTitle($speaker->meta_title);
    SEOTools::setDescription($speaker->meta_description);
    SEOTools::opengraph()->setUrl(route('speakers.show', $speaker->slug));
    SEOTools::opengraph()->addProperty('type', 'person');
    SEOTools::twitter()->setSite('@menaspeakers');
    SEOTools::jsonLd()->addImage($speaker->getFirstMediaUrl('avatar'));
    return view('speakers.show', compact('speaker'));
  }

}
