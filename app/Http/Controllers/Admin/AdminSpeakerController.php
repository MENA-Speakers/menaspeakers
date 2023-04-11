<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\SpeakerUpdateRequest;
use App\Http\Requests\StoreSpeakerRequest;
use App\Http\Resources\SpeakerResource;
use App\Models\Speaker;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileDoesNotExist;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileIsTooBig;

class AdminSpeakerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
      $speakers = Speaker::latest()->paginate(12);
      return Inertia::render('Admin/Speakers/Index', [
        'speakers' => SpeakerResource::collection($speakers),
      ]);
    }

    public function search(Request $request){
      $speakers = Speaker::search($request->input('query'))->paginate(12)->withQueryString();
      return Inertia::render('Admin/Speakers/Index', [
        'speakers' => SpeakerResource::collection($speakers),
        'query' => $request->input('query')
      ]);
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return Application|Factory|View
     */
    public function create()
    {
        return Inertia::render('Admin/Speakers/Create');
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

      $request->validated([
        'name' => 'required',
        'bio' => 'required',
        'image' => 'required',
        'featured' => 'required',
        'meta_title' => 'required',
        'excerpt' => 'required',
        'keywords' => 'required',
      ]);

      $speaker = Speaker::create([
        'name' => $request->input('name'),
        'bio' => $request->input('bio'),
        'meta_title' => $request->input('meta_title'),
        'excerpt' => $request->input('excerpt'),
        'featured' => boolval($request->input('featured')),
        'meta_description' => $request->input('excerpt'),
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
   * @return Application|Factory|View
   */
    public function edit(Speaker $speaker)
    {
        return Inertia::render('Admin/Speakers/Create', [
          'speaker' => SpeakerResource::make($speaker)
        ]);
    }

  /**
   * Update the specified resource in storage.
   *
   * @param SpeakerUpdateRequest $request
   * @param Speaker $speaker
   *
   * @return RedirectResponse
   * @throws FileDoesNotExist
   * @throws FileIsTooBig
   */
    public function update(SpeakerUpdateRequest $request, Speaker $speaker)
    {

        $speaker->update([
          'name' => $request->input('name'),
          'bio' => $request->input('bio'),
          'featured' => boolval($request->input('featured')),
          'meta_title' => $request->input('meta_title'),
          'excerpt' => $request->input('excerpt'),
          'meta_description' => $request->input('excerpt'),
          'keywords' => $request->input('keywords'),
        ]);

      if($request->hasFile('image')){
        $speaker->addMediaFromRequest('image')
          ->toMediaCollection('avatar');
      }

      return Redirect::route('admin.speakers.index');
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
