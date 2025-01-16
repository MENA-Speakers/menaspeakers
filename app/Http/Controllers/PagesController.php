<?php

namespace App\Http\Controllers;

use App\Http\Resources\SpeakerResource;
use App\Models\Speaker;
use Artesaos\SEOTools\Facades\SEOTools;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PagesController extends Controller
{


  public function terms()
  {
    return Inertia::render('TermsConditions');
  }

  public function privacy()
  {
    return inertia::render('PrivacyPolicy');
  }

  public function policy()
  {
    return Inertia::render('RefundPolicy');
  }


  public function contact(Request $request)
  {

    $speaker = Speaker::where('slug', $request->speaker)->first();

    return Inertia::render('Contact/Index', [
      'speaker' =>  $speaker ? new SpeakerResource($speaker) : null
    ]);
  }


  public function profile()
  {
    return view('pages.profile');
  }

  public function thanks()
  {
    return Inertia::render("Contact/ThankYou");
  }

  public function profileArabic()
  {
    return view('pages.profile-arabic');
  }


  public function about()
  {

    SEOTools::setTitle('About Us - MENA Speakers');
    SEOTools::setDescription(" We provide premier public speakers, MCs, and corporate trainers. We are a one-stop solution for all your event needs. Get a speaker in 5 minutes.");
    return Inertia::render('About/Index');
  }
}
