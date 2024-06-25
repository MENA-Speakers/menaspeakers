<?php

namespace App\Http\Controllers;

use App\Http\Resources\SpeakerResource;
use App\Models\Speaker;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PagesController extends Controller
{


  public function terms(){
      return Inertia::render('TermsConditions');
  }


  public function policy(){
    return Inertia::render('RefundPolicy');
  }


  public function contact(Request $request){

    $speaker = Speaker::where('slug', $request->speaker)->first();

    return Inertia::render('Contact/Index', [
      'speaker' =>  $speaker ? new SpeakerResource($speaker) : null
    ]);
  }


  public function profile(){
    return view('pages.profile');
  }

  public function profileArabic(){
    return view('pages.profile-arabic');
  }


  public function about(){
    return Inertia::render('About/Index');
  }
}
