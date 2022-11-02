<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
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
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.blogs.index');
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
   * @return Response
   */
    public function edit(Blog $blog)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
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
