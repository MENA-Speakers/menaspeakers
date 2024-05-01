<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\PortfolioResource;
use App\Http\Resources\ProfileResource;
use App\Models\Portfolio;
use App\Models\Profile;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminSpeakerPortfolioController extends Controller
{

  public function index(Profile $profile): \Inertia\Response
  {
    $portfolios = $profile->portfolios;
    return Inertia::render('Admin/Profiles/Portfolios/Index', [
      'profile' => ProfileResource::make($profile),
      'portfolios' => PortfolioResource::collection($portfolios)
    ]);
  }


  public function store(Request $request, Profile $profile){

    $request->validate([
      'title' => 'required|string',
      'summary' => 'required|string',
      'fee' => 'required|numeric',
    ]);


    $portfolio = $profile->portfolios()->create([
        'title' => $request->input('title'),
        'summary' => $request->input('summary'),
        'profile_id' => $request->input('profileId'),
        'fee' => $request->input('fee'),
        'location' => $profile->location,
    ]);

    //if request has media
    if ($request->hasFile('gallery')) {
        //add multiple media to the gallery collection
        $portfolio->addMultipleMediaFromRequest(['gallery'])
            ->each(function ($fileAdder) {
                $fileAdder->toMediaCollection('gallery');
            });
    }


    //add video  links if there is videos in request
    if($request->has('videos')){
      foreach($request->input('videos') as $video){
        $profile->videoLinks()->create([
          'link' => $video
        ]);
      }
    }

    return redirect()->back();
  }

}
