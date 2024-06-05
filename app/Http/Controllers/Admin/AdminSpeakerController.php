<?php

  namespace App\Http\Controllers\Admin;

  use App\Http\Controllers\Controller;
  use App\Http\Requests\SpeakerUpdateRequest;
  use App\Http\Requests\StoreSpeakerRequest;
  use App\Http\Resources\SpeakerResource;
  use App\Models\Location;
  use App\Models\Profile;
  use App\Models\Speaker;
  use App\Models\Video;
  use Illuminate\Http\RedirectResponse;
  use Illuminate\Http\Request;
  use Inertia\Inertia;
  use Inertia\Response;
  use Spatie\Tags\Tag;

  class AdminSpeakerController extends Controller
  {
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
      $speakers = Speaker::latest()->paginate(12);
      return Inertia::render('Admin/Speakers/Index', [
        'speakers' => SpeakerResource::collection($speakers),
      ]);
    }


    public function search(Request $request): Response
    {
      $speakers = Speaker::search($request->input('query'))->paginate(12)->withQueryString();
      return Inertia::render('Admin/Speakers/Index', [
        'speakers' => SpeakerResource::collection($speakers),
        'query'    => $request->input('query')
      ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
      $tags = Tag::withType('tag')->get();
      $categories = Tag::withType('category')->get();
      return Inertia::render('Admin/Speakers/Create', [
        'locations'  => Location::all(),
        'tags'       => $tags,
        'categories' => $categories,
      ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSpeakerRequest $request): void
    {


      $speaker = Speaker::create([
        'first_name'             => $request->input('first_name'),
        'last_name'             => $request->input('first_name'),
        'bio'              => $request->input('bio'),
        'meta_title'       => $request->input('meta_title'),
        'location_id'      => $request->input('location'),
        'excerpt'          => $request->input('excerpt'),
        'featured'         => boolval($request->input('featured')),
        'meta_description' => $request->input('excerpt'),
        'keywords'         => $request->input('keywords'),
      ]);


      $tags = $request->input('tags');

      $tagValues = array_map(function($tag) {
        return $tag['value'];
      }, $tags);

      $categories = $request->input('categories');

      $catValues = array_map(function($category) {
        return $category['value'];
      }, $categories);

      $speaker->syncTagsWithType($catValues, 'category');
      $speaker->syncTagsWithType($tagValues, 'tag');

      if( $request->hasFile('image') ) {
        $speaker->addMediaFromRequest('image')
          ->toMediaCollection('avatar');
      }
    }


    /**
     * Display the specified resource.
     */
    public function show(Speaker $speaker)
    {

      return Inertia::render('Admin/Speakers/Show', [
        'speaker' => new SpeakerResource($speaker),
        'videos'  => $speaker->videos,
        'faqs'    => $speaker->faqs,
      ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Speaker $speaker)
    {

      $categories = Tag::withType('category')->get();
      $tags = Tag::withType('tag')->get();

      return Inertia::render('Admin/Speakers/Create', [
        'speaker'   => new SpeakerResource($speaker),
        'locations' => Location::all(),
        'tags'      => $tags,
        'categories' => $categories,
      ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(SpeakerUpdateRequest $request, string $id): RedirectResponse
    {
      $request->validated();

      $speaker = Speaker::find($id);

      $speaker->update([
        'name'             => $request->input('name'),
        'slug'             => $request->input('slug'),
        'bio'              => $request->input('bio'),
        'meta_title'       => $request->input('meta_title'),
        'location_id'      => $request->input('location'),
        'meta_description' => $request->input('excerpt'),
        'featured'         => boolval($request->input('featured')),
        'keywords'         => $request->input('keywords'),
      ]);

      if( $request->hasFile('image') ) {
        $speaker->addMediaFromRequest('image')
          ->toMediaCollection('avatar');
      }

      return redirect()->route('speakers.index');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Speaker $speaker): void
    {
      $speaker->delete();
    }
  }
