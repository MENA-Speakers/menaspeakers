<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProfileImageResource;
use App\Models\Profile;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Inertia\Inertia;
use Inertia\Response;

class AdminProfileMediaController extends Controller
{

  public function index(Profile $profile): Response
  {
    return Inertia::render('Admin/Profiles/Media/Index', [
      'profile' => $profile,
      'videos' => $profile->getMedia('videos'),
      'gallery' => ProfileImageResource::collection($profile->getMedia('gallery')),
    ]);
  }


  public function images(Profile $profile): Response
  {
    return Inertia::render('Admin/Profiles/Media/Images', [
      'profile' => $profile,
      'gallery' => $profile->getMedia('gallery'),
    ]);
  }


  public function imageStore(Profile $profile, Request $request): AnonymousResourceCollection
  {
    if($request->hasFile('gallery')){
      $profile->addMultipleMediaFromRequest(['gallery'])
        ->each(function ($fileAdder) {
          $fileAdder->toMediaCollection('gallery');
        });
      return ProfileImageResource::collection($profile->getMedia('gallery'));
    }

    return ProfileImageResource::collection($profile->getMedia('gallery'));
  }

  public function videos(Profile $profile): Response
  {
    return Inertia::render('Admin/Profiles/Media/Videos', [
      'profile' => $profile,
      'videos' => $profile->getMedia('videos'),
    ]);
  }

}
