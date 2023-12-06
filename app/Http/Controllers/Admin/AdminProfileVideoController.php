<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProfileResource;
use App\Models\Profile;
use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class AdminProfileVideoController extends Controller
{

  public function index(Profile $profile)
  {
    return Inertia::render('Admin/Profiles/Show', [
        'profile' => ProfileResource::make($profile),
        'videos' => $profile->videos
    ]);
  }


  private function extractYouTubeId($url)
  {
    $pattern = '/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/';
    preg_match($pattern, $url, $matches);
    return $matches[1] ?? null;
  }

  public function store(Request $request, Profile $profile)
  {
    //Validate
    $request->validate([
      'link' => 'required|url',
      'videoSource' => 'required',
    ]);

    $videoId = null;

    //if video is YouTube extract the id
    if($request->videoSource === 'youtube') {
      $videoId = $this->extractYouTubeId($request->input('link'));
      //throw error if link is not valid
      if( strlen($videoId) !== 11 ) {
        throw  ValidationException::withMessages([
          'link' => 'Please enter a valid youtube link'
        ]);
      }
    } else if($request->videoSource === 'vimeo') {
      $videoId = explode('.com/', $request->link)[1];
      if( strlen($videoId) !== 9 ) {
        throw  ValidationException::withMessages([
          'link' => 'Please enter a valid vimeo link'
        ]);
      }
    }

    $profile->videos()->create([
      'url' => $videoId
    ]);

    return $profile->videos;
  }

  public function destroy(Video $video)
  {
    $video->delete();
    return redirect()->back();
  }
}
