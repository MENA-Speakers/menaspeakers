<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\SpeakerResource;
use App\Models\Speaker;
use App\Models\Video;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminSpeakerVideoController extends Controller
{

  public function index(Speaker $speaker)
  {
    return Inertia::render('Admin/Speakers/Show', [
      'speaker' => SpeakerResource::make($speaker),
      'videos' => $speaker->videos
    ]);
  }

  public function store(Request $request, Speaker $speaker)
  {

    //Validate
    $request->validate([
      'link' => 'required|url'
    ]);

    //extract video id
    $videoId = explode('=', $request->link)[1];

    $speaker->videos()->create([
      'url' => $videoId
    ]);

    return $speaker->videos;

  }

  public function destroy(Video $video){

    $video->delete();
    return redirect()->back();
  }
}
