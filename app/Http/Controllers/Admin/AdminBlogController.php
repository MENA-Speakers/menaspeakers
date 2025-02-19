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

      $categories = Category::all()->map(function($category) {
        return [
          'value' => $category->id,
          'label' => $category->name,
        ];
      });

      $authors = Speaker::all()->map(function ($author) {
        return [
          'value' => $author->id,
          'label' => $author->first_name . ' ' . $author->last_name,
        ];
      });


      return Inertia::render('Admin/Blogs/Create', [
        'categories' => $categories,
        'selectedCategories' => [],
        'authors' => $authors,
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
      $categoryIds = array_map(function($category) {
        return $category['value'];
      }, $request->input('categories'));

      $blog = Blog::create([
        'title'    => $request->input('title'),
        'content'  => $request->input('content'),
        'keywords' => $request->input('keywords'),
        'excerpt'  => $request->input('excerpt'),
        'author_id' => $request->input('authorId'),
        'featured' => boolval($request->input('featured')),
      ]);

      $blog->categories()->sync($categoryIds);

      if( $request->hasFile('image') ) {
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

      $selectedCategories = $blog->categories->map(function($category) {
        return [
          'value' => $category->id,
          'label' => $category->name,
        ];
      });

      $categories = Category::all()->map(function($category) {
        return [
          'value' => $category->id,
          'label' => $category->name,
        ];
      });

      $author = Speaker::find($blog->author_id);

      return Inertia::render('Admin/Blogs/Create', [
        'blog' => new BlogResource($blog),
        'categories' => $categories,
        'selectedCategories' => $selectedCategories,
        'author' => [
          'value' => $author?->id,
          'label' => $author?->first_name . ' ' . $author?->last_name,
        ],
        'authors' => []
      ]);
    }


    /**
     * Update the specified resource in storage.
     *
     * This method handles the update of an existing blog post. It validates the request data,
     * updates the blog post with the provided data, and optionally handles the upload
     * of a new image file associated with the blog post.
     *
     * @param BlogUpdateRequest $request The request object containing the validated data for the blog post update.
     * @param Blog $blog The blog instance to be updated.
     *
     * @return Response The response after the blog post has been updated.
     */
    public function update(BlogUpdateRequest $request, Blog $blog)
    {
      $blog->update([
        'title'    => $request->input('title'),
        'content'  => $request->input('content'),
        'excerpt'  => $request->input('excerpt'),
        'featured' => boolval($request->input('featured')),
        'author_id' => $request->input('authorId'),
      ]);

      $categoryIds = [];
      if( isset($request->input('categories')[0]['value']) ) {
        $categoryIds = array_map(function($category) {
          return $category['value'];
        }, $request->input('categories'));
      }

      if( !empty($categoryIds) ) {
        $blog->categories()->sync($categoryIds);
      }

      if( $request->hasFile('image') ) {
        $blog->addMediaFromRequest('image')
          ->toMediaCollection('image');
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
