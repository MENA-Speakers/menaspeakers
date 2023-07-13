<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\SpeakerResource;
use App\Models\Speaker;
use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
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


  private function extractYouTubeId($url)
  {
    $pattern = '/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/';
    preg_match($pattern, $url, $matches);
    return isset($matches[1]) ? $matches[1] : null;
  }

  public function store(Request $request, Speaker $speaker)
  {
    //Validate
    $request->validate([
      'link' => 'required|url',
      'videoSource' => 'required',
    ]);

    $videoId = null;

    //if video is youtube extract the id
    if($request->videoSource === 'youtube') {
      $videoId = $this->extractYouTubeId($request->input('link'));
      //throw error if link is not valid
      if( strlen($videoId) !== 11 ) {
        throw  ValidationException::withMessages([
          'link' => 'Please enter a valid youtube link'
        ]);
      } else if($request->videoSource === 'vimeo') {
        $videoId = explode('.com/', $request->link)[1];
        if( strlen($videoId) !== 9 ) {
          throw  ValidationException::withMessages([
            'link' => 'Please enter a valid vimeo link'
          ]);
        }
      }
    }

    $speaker->videos()->create([
      'url' => $videoId
    ]);

    return $speaker->videos;
  }

  public function destroy(Video $video)
  {

    $video->delete();
    return redirect()->back();
  }
}
