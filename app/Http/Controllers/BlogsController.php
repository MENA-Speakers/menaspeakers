<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogResource;
use App\Models\Blog;
use Artesaos\SEOTools\Facades\SEOTools;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogsController extends Controller
{
    public function index(Request $request){

      SEOTools::setTitle('Blogs | MENA Speakers');
      SEOTools::setDescription('Stay informed with the latest insights on public speaking, event management, and leadership from MENA Speakers. Get tips, strategies, and inspiration to elevate your next event.');

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

      $cleanContent = strip_tags($blog->content);
      $truncatedContent = mb_strimwidth($cleanContent, 0, 150, "...");
      SEOTools::setTitle($blog->title);
      SEOTools::setDescription($blog->excerpt ? $blog->excerpt : $truncatedContent);
      SEOTools::opengraph()->setUrl(route('blogs.show', $blog->slug));
      SEOTools::opengraph()->addProperty('type', 'blog');
      SEOTools::twitter()->setSite('@menaspeakers');
      SEOTools::jsonLd()->addImage($blog->getFirstMediaUrl('image', 'webp'));

      return Inertia::render('Blogs/Show', [
        'blog' => new BlogResource($blog)
      ]);
    }
}
