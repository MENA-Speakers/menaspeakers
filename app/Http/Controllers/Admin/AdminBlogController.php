<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\BlogUpdateRequest;
use App\Http\Requests\StoreBlogRequest;
use App\Models\Blog;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Redirect;

class AdminBlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Application|Factory|View
     */
    public function index()
    {
      $blogs = Blog::latest()->paginate(12);
        return view('admin.blogs.index', compact('blogs'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Application|Factory|View
     */
    public function create()
    {
        return view('admin.blogs.create');
    }

  /**
   * Store a newly created resource in storage.
   *
   * @param StoreBlogRequest $request
   *
   * @return RedirectResponse
   */
    public function store(StoreBlogRequest $request)
    {
        $blog = Blog::create([
          'title' => $request->input('title'),
          'content' => $request->input('content'),
          'excerpt' => $request->input('excerpt'),
          'featured' => boolval($request->input('featured')),
        ]);

        if($request->hasFile('image')){
          $blog->addMediaFromRequest('image')
            ->toMediaCollection('image');
        }

        return Redirect::route('admin.blogs.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

  /**
   * Show the form for editing the specified resource.
   *
   * @param Blog $blog
   *
   * @return Application|Factory|View
   */
    public function edit(Blog $blog)
    {
        return view('admin.blogs.edit', compact('blog'));
    }

  /**
   * Update the specified resource in storage.
   *
   * @param BlogUpdateRequest $request
   * @param Blog $blog
   *
   * @return Response
   */
    public function update(BlogUpdateRequest $request, Blog $blog)
    {
        $blog->update([
          'title' => $request->input('title'),
          'content' => $request->input('content'),
          'excerpt' => $request->input('excerpt'),
          'featured' => boolval($request->input('featured')),
        ]);

      if($request->hasFile('image')){
        $blog->addMediaFromRequest('image')
          ->toMediaCollection('image');
      }
    }

  /**
   * Remove the specified resource from storage.
   *
   * @param Blog $blog
   *
   * @return RedirectResponse
   */
    public function destroy(Blog $blog)
    {
        $blog->delete();

        return Redirect::route('admin.blogs.index');
    }
}
