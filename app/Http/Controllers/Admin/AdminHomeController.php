<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\LocationResource;
use App\Models\Blog;
use App\Models\Location;
use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminHomeController extends Controller
{

  public function index(){
    $speaker_count = Profile::count();
    $blog_count = Blog::count();
    $user_count = User::count();
    return Inertia::render('Admin/Index', [
      'speaker_count' => $speaker_count,
      'blog_count' => $blog_count,
      'user_count' => $user_count,
      'locations' => LocationResource::collection(Location::all())
    ]);
  }
}
