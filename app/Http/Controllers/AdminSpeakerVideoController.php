<?php

namespace App\Http\Controllers;

use App\Http\Resources\VideoLinkResource;
use App\Models\Speaker;
use Illuminate\Http\Request;

class AdminSpeakerVideoController extends Controller
{

  function extractVideoId($link, $source) {
    $video_id = '';

    if ($source === 'youtube') {
      $urlParts = parse_url($link);

      if ($urlParts['host'] === 'youtu.be') {
        $video_id = substr($urlParts['path'], 1);
      } else {
        parse_str($urlParts['query'], $urlParams);
        $video_id = $urlParams['v'] ?? '';
      }
    } elseif ($source === 'vimeo') {
      $video_id = substr(parse_url($link, PHP_URL_PATH), 1);
    }

    return $video_id;
  }

  public function store(Request $request, $id)
  {
    //Validate
    $request->validate([
      'link' => 'required|url',
      'videoSource' => 'required|in:youtube,vimeo'
    ]);

    // extract youtbe video id
    $videoId = $this->extractVideoId($request->link, $request->videoSource);



    $speaker = Speaker::where('slug', $id)->first();

    $speaker->videos()->create([
      'url' => $videoId
    ]);

    // return speaker videos json
    return $speaker->videos;

  }
}
