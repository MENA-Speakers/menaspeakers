<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSpeakerRequest;
use App\Models\Speaker;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Redirect;

class SpeakerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Application|Factory|View
     */
    public function index()
    {
      $speakers = Speaker::paginate(12);
      return view('admin.speakers.index', compact('speakers') );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.speakers.create');
    }

  /**
   * Store a newly created resource in storage.
   *
   * @param StoreSpeakerRequest $request
   *
   * @return RedirectResponse
   */
    public function store(StoreSpeakerRequest $request)
    {
      $speaker = Speaker::create([
        'name' => $request->input('name'),
        'bio' => $request->input('bio'),
        'featured' => boolval($request->input('featured')),
        'meta_title' => $request->input('meta_title'),
        'excerpt' => $request->input('excerpt'),
        'keywords' => $request->input('keywords'),
      ]);

      if($request->hasFile('image')){
        $speaker->addMediaFromRequest('image')
          ->toMediaCollection('avatar');
      }

      return Redirect::route('admin.speakers.index');
    }


  /**
   * Show the form for editing the specified resource.
   *
   * @param Speaker $speaker
   *
   * @return Response
   */
    public function edit(Speaker $speaker)
    {
        //
    }

  /**
   * Update the specified resource in storage.
   *
   * @param Request $request
   * @param Speaker $speaker
   *
   * @return Response
   */
    public function update(Request $request, Speaker $speaker)
    {

    }

  /**
   * Remove the specified resource from storage.
   *
   * @param Speaker $speaker
   *
   * @return RedirectResponse
   */
    public function destroy(Speaker $speaker)
    {
        $speaker->delete();

        return Redirect::route('admin.speakers.index');
    }
}
