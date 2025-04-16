<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\BlogUpdateRequest;
use App\Http\Requests\StoreBlogRequest;
use App\Http\Resources\BlogResource;
use App\Models\Blog;
use App\Models\Category;
use App\Models\Speaker;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AdminBlogController extends Controller
{


  /**
   * Display a listing of the resource.
   *
   * This method retrieves the latest blog posts, paginates them, and renders the 'Admin/Blogs/Index' component
   * using the Inertia.js library. The paginated blog posts are passed as a prop to the component.
   *
   * @return \Inertia\Response The Inertia response containing the paginated list of blog posts.
   */
  public function index()
  {
    $blogs = Blog::latest()->paginate(12);
    return Inertia::render('Admin/Blogs/Index', [
      'blogs' => BlogResource::collection($blogs)
    ]);
  }

  /**
   * Show the form for creating a new resource.
   *
   * This method renders the form for creating a new blog post.
   * It uses the Inertia.js library to render the 'Admin/Blogs/Create' component.
   *
   * @return \Inertia\Response The Inertia response containing the form for creating a new blog post.
   */
  public function create()
  {
    return Inertia::render('Admin/Blogs/Create', [
      'authors' => Speaker::select('id', 'first_name', 'last_name', 'slug')
        ->orderBy('first_name')
        ->get()
        ->map(function ($speaker) {
          return [
            'value' => $speaker->id,
            'label' => trim($speaker->first_name . ' ' . $speaker->last_name)
          ];
        }),
      'categories' => Category::select('id', 'name')
        ->orderBy('name')
        ->get()
        ->map(function ($category) {
          return [
            'value' => $category->id,
            'label' => $category->name
          ];
        }),
      'selectedCategories' => [],
      'author' => null,
      'blog' => null
    ]);
  }

  /**
   * Store a newly created resource in storage.
   *
   * This method handles the creation of a new blog post. It validates the request data,
   * creates a new blog post with the provided data, synchronizes the categories,
   * and optionally handles the upload of an image file associated with the blog post.
   *
   * @param StoreBlogRequest $request The request object containing the validated data for the new blog post.
   *
   * @return RedirectResponse A redirect response to the blog index route.
   */
  public function store(StoreBlogRequest $request)
  {
    $categoryIds = array_map(function ($category) {
      return $category['value'];
    }, $request->input('categories'));

    $blog = Blog::create([
      'title'    => $request->input('title'),
      'content'  => $request->input('content'),
      'keywords' => $request->input('keywords'),
      'excerpt'  => $request->input('excerpt'),
      'speaker_id' => $request->input('authorId'),
      'featured' => boolval($request->input('featured')),
    ]);

    $blog->categories()->sync($categoryIds);

    if ($request->hasFile('image')) {
      $blog->addMediaFromRequest('image')
        ->toMediaCollection('image');
    }

    return Redirect::route('admin.blogs.index');
  }

  /**
   * Show the form for editing the specified resource.
   *
   * This method renders the form for editing an existing blog post.
   * It uses the Inertia.js library to render the 'Admin/Blogs/Create' component,
   * passing the blog data as a prop.
   *
   * @param Blog $blog The blog instance to be edited.
   *
   * @return \Inertia\Response The Inertia response containing the form for editing the blog.
   */
  public function edit(Blog $blog)
  {
    return Inertia::render('Admin/Blogs/Create', [
      'blog' => $blog->load(['author', 'categories']),
      'authors' => Speaker::select('id', 'first_name', 'last_name', 'slug')
        ->orderBy('first_name')
        ->get()
        ->map(function ($speaker) {
          return [
            'value' => $speaker->id,
            'label' => trim($speaker->first_name . ' ' . $speaker->last_name)
          ];
        }),
      'categories' => Category::select('id', 'name')
        ->orderBy('name')
        ->get()
        ->map(function ($category) {
          return [
            'value' => $category->id,
            'label' => $category->name
          ];
        }),
      'selectedCategories' => $blog->categories->map(function ($category) {
        return [
          'value' => $category->id,
          'label' => $category->name
        ];
      }),
      'author' => $blog->author ? [
        'value' => $blog->author->id,
        'label' => trim($blog->author->first_name . ' ' . $blog->author->last_name)
      ] : null
    ]);
  }


  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Blog $blog)
  {
    $validated = $request->validate([
      'title' => 'required|string|max:255',
      'content' => 'required|string',
      'excerpt' => 'required|string',
      'featured' => 'boolean',
      'author_id' => 'nullable|exists:speakers,id',
      'categories' => 'nullable|array',
      'categories.*' => 'exists:categories,id',
      'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
    ]);

    DB::beginTransaction();
    try {
      $blog->update([
        'title' => $validated['title'],
        'content' => $validated['content'],
        'excerpt' => $validated['excerpt'],
        'featured' => $validated['featured'],
        'author_id' => $validated['author_id'] ?? null,
      ]);

      // Handle categories
      if (isset($validated['categories'])) {
        $blog->categories()->sync($validated['categories']);
      }

      // Handle image upload
      if ($request->hasFile('image')) {
        $blog->clearMediaCollection('image');
        $blog->addMediaFromRequest('image')
          ->toMediaCollection('image');
      }

      DB::commit();

      return redirect()
        ->route('admin.blogs.index')
        ->with('success', 'Blog updated successfully.');
    } catch (\Exception $e) {
      DB::rollBack();
      Log::error('Blog update failed: ' . $e->getMessage());

      return back()
        ->withErrors(['error' => 'Failed to update blog. Please try again.'])
        ->withInput();
    }
  }


  /**
   * Remove the specified resource from storage.
   *
   * This method handles the deletion of an existing blog post. It deletes the blog post
   * from the database and then redirects to the blog index route.
   *
   * @param Blog $blog The blog instance to be deleted.
   *
   * @return RedirectResponse A redirect response to the blog index route.
   */
  public function destroy(Blog $blog)
  {
    $blog->delete();

    return Redirect::route('admin.blogs.index');
  }
}
