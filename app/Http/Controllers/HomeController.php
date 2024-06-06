<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogResource;
use App\Http\Resources\ImageResource;
use App\Http\Resources\ProfileResource;
use App\Http\Resources\SpeakerResource;
use App\Mail\BirthdayEmail;
use App\Models\Blog;
use App\Models\Image;
use App\Models\Profile;
use App\Models\Speaker;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class HomeController extends Controller
{

    public function index(){
        $speakers = Speaker::where('featured', true)->inRandomOrder()->limit(4)->get();
        $blogs = Blog::latest()->limit(4)->get();

        return Inertia::render('Index', [
            'speakers' => SpeakerResource::collection($speakers),
            'blogs' => BlogResource::collection($blogs),
            'gallery' => ImageResource::collection(Image::inRandomOrder()->limit(8)->get())
        ]);
    }
}
