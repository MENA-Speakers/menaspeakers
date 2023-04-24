<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogResource;
use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

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

      return Inertia::render('Blogs/Index', [
        'blogs' => BlogResource::collection($blogs),
        'query' => $query
      ]);
    }


    public function show(Blog $blog){
      return Inertia::render('Blogs/Show', [
        'blog' => new BlogResource($blog)
      ]);
    }
}
