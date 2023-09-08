<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ExternalSiteController extends Controller
{

  public function sports() {
    //Redirect to sport website
//    return redirect()->to('https://sports.mena-speakers.com?utm_source=mena-speakers.com&utm_medium=referral&utm_campaign=mena-speakers.com');
    return redirect()->away('https://www.google.com');
  }

  //Redirect to Wellness website
  public function wellness() {
    return redirect()->to('https://wellness.mena-speakers.com?utm_source=mena-speakers.com&utm_medium=referral&utm_campaign=mena-speakers.com');
  }

  //Redirect to coaching website
  public function coaching() {
    return redirect()->to('https://coaching.mena-speakers.com?utm_source=mena-speakers.com&utm_medium=referral&utm_campaign=mena-speakers.com');
  }
}
