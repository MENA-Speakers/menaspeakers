<?php

namespace App\Http\Controllers;

use App\Imports\BlogImport;
use App\Imports\SpeakerImport;
use App\Models\Speaker;
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
    return view('speakers.show', compact('speaker'));
  }

}
