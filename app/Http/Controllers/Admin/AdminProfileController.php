<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProfileUpdateRequest;
use App\Http\Requests\StoreProfileRequest;
use App\Http\Resources\ProfileResource;
use App\Models\Location;
use App\Models\Profile;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileDoesNotExist;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileIsTooBig;

class AdminProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
      $profiles = Profile::latest()->paginate(12);
      return Inertia::render('Admin/Profiles/Index', [
          'profiles' => ProfileResource::collection($profiles),
      ]);
    }

    public function search(Request $request){
      $profiles = Profile::search($request->input('query'))->paginate(12)->withQueryString();
      return Inertia::render('Admin/Profiles/Index', [
          'profiles' => ProfileResource::collection($profiles),
          'query' => $request->input('query')
      ]);
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Profiles/Create', [
          'locations' => Location::all(),
        ]);
    }

  /**
   * Store a newly created resource in storage.
   *
   * @param StoreProfileRequest $request
   *
   * @return RedirectResponse
   */
    public function store(StoreProfileRequest $request)
    {


      $profile = Profile::create([
        'first_name' => $request->input('first_name'),
        'last_name' => $request->input('last_name'),
        'about' => $request->input('about'),
        'email' => $request->input('email'),
        'phone' => $request->input('location'),
        'job_title' => $request->input('job_title'),
        'fee' => boolval($request->input('fee')),
        'linkedin' => $request->input('linkedin'),
        'website' => $request->input('website'),
        'twitter' => $request->input('twitter'),
        'dob' => Carbon::parse($request->input('dob'))->format('Y-m-d'),
      ]);

      if($request->hasFile('image')){
        $profile->addMediaFromRequest('image')
          ->toMediaCollection('avatar');
      }

      return Redirect::route('admin.profiles.index');

    }


    public function show(Profile $profile): \Inertia\Response
    {
        return Inertia::render('Admin/Profiles/Show', [
            'profile' => ProfileResource::make($profile),
            'videos' => $profile->videos,
            'bios' => $profile->bios,
        ]);
    }


  /**
   * Show the form for editing the specified resource.
   *
   * @param Profile $profile
   *
   * @return \Inertia\Response
   */
    public function edit(Profile $profile)
    {
        return Inertia::render('Admin/Profiles/Create', [
            'profile' => ProfileResource::make($profile),
            'locations' => Location::all(),
        ]);
    }

  /**
   * Update the specified resource in storage.
   *
   * @param ProfileUpdateRequest $request
   * @param Profile $profile
   *
   * @return RedirectResponse
   * @throws FileDoesNotExist
   * @throws FileIsTooBig
   */
    public function update(ProfileUpdateRequest $request, Profile $profile)
    {
        $profile->update([
          'first_name' => $request->input('first_name'),
          'last_name' => $request->input('last_name'),
          'about' => $request->input('about'),
          'email' => $request->input('email'),
          'phone' => $request->input('location'),
          'job_title' => $request->input('job_title'),
          'fee' => boolval($request->input('fee')),
          'linkedin' => $request->input('linkedin'),
          'website' => $request->input('website'),
          'twitter' => $request->input('twitter'),
          'dob' => Carbon::parse($request->input('dob'))->format('Y-m-d'),
        ]);


      if($request->hasFile('image')){
        $profile->addMediaFromRequest('image')
          ->toMediaCollection('avatar');
      }



      return Redirect::route('admin.profiles.index');
    }

  /**
   * Remove the specified resource from storage.
   *
   * @param Profile $profile
   *
   * @return RedirectResponse
   */
    public function destroy(Profile $profile)
    {
        $profile->delete();

        return Redirect::route('admin.profiles.index');
    }
}
