<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogResource;
use App\Models\Blog;
use Artesaos\SEOTools\Facades\SEOTools;
use Illuminate\Http\Request;
use Inertia\Inertia;

/**
       * Handles blog-related actions for the application.
       */
      class BlogsController extends Controller
      {
          /**
           * Display a listing of the blogs.
           *
           * @param \Illuminate\Http\Request $request
           * @return \Inertia\Response
           */
          public function index(Request $request)
          {
              // Set SEO title and description for the blogs page
              SEOTools::setTitle('Blogs | MENA Speakers');
              SEOTools::setDescription('Stay informed with the latest insights on public speaking, event management, and leadership from MENA Speakers. Get tips, strategies, and inspiration to elevate your next event.');

              // Initialize query variable
              $query = null;

              // Check if the request has a query parameter
              if ($request->has('query')) {
                  // Get the query parameter from the request
                  $query = $request->input('query');
                  // Search blogs based on the query and paginate the results
                  $blogs = Blog::search($query)->paginate(12)->withQueryString();
              } else {
                  // Get the latest blogs and paginate the results
                  $blogs = Blog::latest()->paginate(12);
              }

              // Render the blogs index page with the retrieved data
              return Inertia::render('Blogs/Index', [
                  'blogs' => BlogResource::collection($blogs),
                  'query' => $query
              ]);
          }

          /**
           * Display the specified blog.
           *
           * @param \App\Models\Blog $blog
           * @return \Inertia\Response
           */
          public function show(Blog $blog)
          {
              // Clean and truncate the blog content for SEO description
              $cleanContent = strip_tags($blog->content);
              $truncatedContent = mb_strimwidth($cleanContent, 0, 150, "...");

              // Set SEO title and description for the blog page
              SEOTools::setTitle($blog->title);
              SEOTools::setDescription($blog->excerpt ? $blog->excerpt : $truncatedContent);
              SEOTools::opengraph()->setUrl(route('blogs.show', $blog->slug));
              SEOTools::opengraph()->addProperty('type', 'blog');
              SEOTools::twitter()->setSite('@menaspeakers');
              SEOTools::jsonLd()->addImage($blog->getFirstMediaUrl('image', 'webp'));

              // Render the blog show page with the retrieved data
              return Inertia::render('Blogs/Show', [
                  'blog' => new BlogResource($blog)
              ]);
          }
      }
