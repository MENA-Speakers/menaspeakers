<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogResource;
use App\Http\Resources\ImageResource;
use App\Http\Resources\ProfileResource;
use App\Http\Resources\SpeakerResource;
use App\Models\Blog;
use App\Models\Image;
use App\Models\Speaker;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{

    public function index(){
        $speakers = Speaker::inRandomOrder()->limit(3)->get();
        $blogs = Blog::latest()->limit(3)->get();
        return Inertia::render('Index', [
            'speakers' => SpeakerResource::collection($speakers),
            'blogs' => BlogResource::collection($blogs),
            'gallery' => ImageResource::collection(Image::inRandomOrder()->limit(8)->get())
        ]);
    }


}
