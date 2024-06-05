<?php

namespace App\Http\Controllers;


use App\Models\Speaker;
use Illuminate\Http\Request;

class AdminSpeakerFaqController extends Controller
{


  public function store(Request $request, Speaker $speaker)
  {
    $request->validate([
      'question' => 'required|string',
      'answer' => 'required|string',
    ]);


    $faq = $speaker->faqs()->create([
      'question' => $request->input('question'),
      'answer' => $request->input('answer'),
    ]);

    return $faq;
  }
}
