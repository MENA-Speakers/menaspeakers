<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProfileResource;
use App\Http\Resources\VideoLinkResource;
use App\Models\Profile;
use App\Models\Speaker;
use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class AdminProfileVideoController extends Controller
{

  public function index(Profile $profile)
  {
    return Inertia::render('Admin/Profiles/Videos', [
        'profile' => ProfileResource::make($profile),
        'videos' => VideoLinkResource::collection($profile->videoLinks),
    ]);
  }



  public function store(Request $request, Speaker $profile)
  {
    //Validate
    $request->validate([
      'link' => 'required|url',
    ]);

    $link = $profile->videoLinks()->create([
      'link' => $request->link
    ]);

    return VideoLinkResource::make($link);
  }

  public function destroy(Video $video)
  {
    $video->delete();
    return redirect()->back();
  }
}
