<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Media;
use App\Models\Speaker;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminSpeakerGalleryController extends Controller
{


  public function index(Speaker $speaker){
    $gallery = $speaker->getMedia('gallery');
    $galleryArray = [];
    foreach ($gallery as $media) {
      $galleryArray[] = [
        'id' => $media->id,
        'url' => $media->getUrl('webp'),
      ];
    }

    return $galleryArray;
  }

  public function store(Request $request, Speaker $speaker){


    if(!$request->hasFile('images')){
      return redirect()->back()->with('error', 'Please select an image');
    }

    foreach($request->file('images') as $image){
      $speaker->addMedia($image)->toMediaCollection('gallery');
    }

    $gallery = $speaker->getMedia('gallery');
    $galleryArray = [];
    foreach ($gallery as $media) {
      $galleryArray[] = [
        'id' => $media->id,
        'url' => $media->getUrl('webp'),
      ];
    }

    return $galleryArray;
  }


  public function destroy( $mediaId){
    $media = Media::find($mediaId);
    $media->delete();
    return redirect()->back()->with('success', 'Image deleted successfully');
  }

}
