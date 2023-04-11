<?php

namespace App\Http\Controllers;

use App\Http\Resources\ImageResource;
use App\Models\Image;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminGalleryController extends Controller
{
  public function index(){
    return Inertia::render('Admin/Gallery/Index', [
      'images' => ImageResource::collection(Image::latest()->get())
    ]);
  }

  public function store(Request $request){

    if(!$request->hasFile('images')){
      return redirect()->back()->with('error', 'Please select an image');
    }


    foreach($request->file('images') as $image){
      $item = Image::create([
        'name' => $image->getClientOriginalName(),
      ]);

      $item->addMedia($image)->toMediaCollection('image');

    }

    return ImageResource::collection(Image::latest()->get());
  }

  public function destroy(Image $gallery){
    $gallery->delete();
    return redirect()->route('admin.gallery.index')->with('success', 'Image deleted successfully');
  }
}
