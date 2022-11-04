<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Speaker;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function dashboard(){
      $speaker_count = Speaker::count();
      $blog_count   = Blog::count();
      $user_count  = User::count();
      return view('dashboard', compact('speaker_count', 'blog_count',  'user_count'));
    }
}
