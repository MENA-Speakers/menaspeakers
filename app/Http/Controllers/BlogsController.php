<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class BlogsController extends Controller
{
    public function index(Request $request){
      $bogs = null;
      $query = null;
      if($request->has('query')){
        $query = $request->input('query');
        $blogs = Blog::search( $query)->paginate(12)->withQueryString();
      } else {
        $blogs = Blog::latest()->paginate(12);
      }

      return view('blogs.index', compact('query', 'blogs'));
    }


    public function show(Blog $blog){
      return view('blogs.show', compact('blog'));
    }
}
