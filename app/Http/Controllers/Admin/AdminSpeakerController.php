<?php

  namespace App\Http\Controllers\Admin;

  use App\Http\Controllers\Controller;
  use App\Http\Requests\SpeakerUpdateRequest;
  use App\Http\Requests\StoreSpeakerRequest;
  use App\Http\Resources\SpeakerResource;
  use App\Models\Category;
  use App\Models\Location;
  use App\Models\Profile;
  use App\Models\Speaker;
  use App\Models\Topic;
  use App\Models\Video;
  use Illuminate\Http\RedirectResponse;
  use Illuminate\Http\Request;
  use Inertia\Inertia;
  use Inertia\Response;

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
      $topics = Topic::all()->map(function($topic) {
        return [
          'value' => $topic->id,
          'label' => $topic->name,
        ];
      });

      $categories = Category::all()->map(function($category) {
        return [
          'value' => $category->id,
          'label' => $category->name,
        ];
      });


      return Inertia::render('Admin/Speakers/Create', [
        'locations'          => Location::all(),
        'topics'               => $topics,
        'categories'         => $categories,
        'selectedCategories' => [],
        'selectedTopics' => [],
      ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSpeakerRequest $request): void
    {

// Extract the category IDs from the request data
      $categoryIds = array_map(function($category) {
        return $category['value'];
      }, $request->input('categories'));

// Extract the Topic IDs from the request data
      $topicIds = array_map(function($topic) {
        return $topic['value'];
      }, $request->input('topics'));

      $speaker = Speaker::create([
        'first_name'       => $request->input('first_name'),
        'last_name'        => $request->input('first_name'),
        'bio'              => $request->input('bio'),
        'title'            => $request->input('title'),
        'location_id'      => $request->input('location'),
        'excerpt'          => $request->input('excerpt'),
        'featured'         => boolval($request->input('featured')),
        'meta_description' => $request->input('excerpt'),
        'key_titles'       => $request->input('key_titles'),
      ]);

      // Sync the categories to the speaker
      $speaker->categories()->sync($categoryIds);

      // Sync the topics to the speaker
      $speaker->topics()->sync($topicIds);

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


      $selectedCategories = $speaker->categories->map(function($category) {
        return [
          'value' => $category->id,
          'label' => $category->name,
        ];
      });

      //selected topics
      $selectedTopics = $speaker->topics->map(function($topic) {
        return [
          'value' => $topic->id,
          'label' => $topic->name,
        ];
      });

      $topics = Topic::all()->map(function($topic) {
        return [
          'value' => $topic->id,
          'label' => $topic->name,
        ];
      });

      $categories = Category::all()->map(function($category) {
        return [
          'value' => $category->id,
          'label' => $category->name,
        ];
      });


      return Inertia::render('Admin/Speakers/Create', [
        'speaker'            => new SpeakerResource($speaker),
        'locations'          => Location::all(),
        'topics'             => $topics,
        'categories'         => $categories,
        'selectedCategories' => $selectedCategories,
        'selectedTopics' => $selectedTopics,
      ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(SpeakerUpdateRequest $request, string $id): RedirectResponse
    {
      $request->validated();

      dd(\request()->all());

      $speaker = Speaker::find($id);

      // Extract the category IDs from the request data
      $categoryIds = [];
      if (isset($request->input('categories')[0]['value'])) {
        $categoryIds = array_map(function($category) {
          return $category['value'];
        }, $request->input('categories'));
      }


      // Extract the category IDs from the request data
      if (isset($request->input('topics')[0]['value'])) {
        $topicIds = array_map(function($topic) {
          return $topic['value'];
        }, $request->input('topics'));
      }


      $speaker->update([
        'first_name'       => $request->input('first_name'),
        'last_name'        => $request->input('last_name'),
        'bio'              => $request->input('bio'),
        'title'            => $request->input('title'),
        'location_id'      => $request->input('location'),
        'excerpt'          => $request->input('excerpt'),
        'featured'         => boolval($request->input('featured')),
        'meta_description' => $request->input('excerpt'),
        'key_titles'       => $request->input('key_titles'),
      ]);

      // Sync the categories to the speaker
      if (!empty($categoryIds)) {
        $speaker->categories()->sync($categoryIds);
      }

      if (!empty($topicIds)) {
        $speaker->topics()->sync($topicIds);
      }

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
