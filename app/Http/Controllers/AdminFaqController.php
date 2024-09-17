<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use App\Models\Speaker;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminFaqController extends Controller
{
  public function index() {
    return Inertia::render('Admin/Faqs/Index', [
      'faqs' => Faq::where('speaker_id', null)->get()
    ]);
  }



  public function store(Request $request)
  {
    $request->validate([
      'question' => 'required|string',
      'answer' => 'required|string',
    ]);


    $faq = Faq::create([
      'question' => $request->input('question'),
      'answer' => $request->input('answer'),
    ]);

    return $faq;
  }

  public function delete(Faq $faq)
  {
    $faq->delete();
    return redirect()->route('admin.faqs.index');
  }
}
