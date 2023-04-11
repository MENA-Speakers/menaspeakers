<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PagesController extends Controller
{


  public function terms(){
      return view('pages.terms-condition');
  }


  public function policy(){
    return view('pages.refund-policy');
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
