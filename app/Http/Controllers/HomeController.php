<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Speaker;
use Illuminate\Http\Request;

class HomeController extends Controller
{

    public function index(){
        $speakers = Speaker::inRandomOrder()->limit(3)->get();
        $blogs = Blog::latest()->limit(3)->get();
        return view('home', compact('blogs','speakers'));
    }
}
