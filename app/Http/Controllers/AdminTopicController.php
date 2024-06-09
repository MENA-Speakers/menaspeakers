<?php

namespace App\Http\Controllers;


use App\Http\Resources\TopicResource;
use App\Models\Topic;
use Illuminate\Http\Request;

class AdminTopicController extends Controller
{

  public function store(Request $request)
  {
    $request->validate([
      'name' => 'required|string',
      'image' => 'required|image',
    ]);

    $topic = Topic::create([
      'name' => $request->input('name'),
    ]);


    if($request->hasFile('image')){
      $topic->addMediaFromRequest('image')->toMediaCollection('image');
    }

    return TopicResource::make($topic);
  }



  public function delete(Topic $topic)
  {
    // Detach the related speakers from the category
    $topic->speakers()->detach();

    // Delete the category
    $topic->delete();

    return back();
  }


}
