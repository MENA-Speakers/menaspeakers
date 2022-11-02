<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{


  public function terms(){
      return view('pages.terms-condition');
  }


  public function policy(){

  }


  public function contact(){
    return view('pages.contact');
  }


  public function profile(){
    return view('pages.profile');
  }
}
