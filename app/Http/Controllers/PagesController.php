<?php

namespace App\Http\Controllers;

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


  public function contact(){
    return Inertia::render('Contact/Index');
  }


  public function profile(){
    return view('pages.profile');
  }

  public function profileArabic(){
    return view('pages.profile-arabic');
  }
}
