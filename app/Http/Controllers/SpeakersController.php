<?php

namespace App\Http\Controllers;

use App\Imports\BlogImport;
use App\Imports\SpeakerImport;
use App\Models\Speaker;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class SpeakersController extends Controller
{

  public function index(){
    $speakers = Speaker::paginate(12);
    return view('speakers.index', compact('speakers'));
  }

  public function show(Speaker $speaker){
    return view('speakers.show', compact('speaker'));
  }

}
