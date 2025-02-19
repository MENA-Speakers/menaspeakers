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
   *
   * This method retrieves the latest speakers, paginates them, and renders the 'Admin/Speakers/Index' component
   * using the Inertia.js library. The paginated speakers are passed as a prop to the component.
   *
   * @return \Inertia\Response The Inertia response containing the paginated list of speakers.
   */
  public function index(): Response
  {
    $speakers = Speaker::latest()->paginate(12);
    return Inertia::render('Admin/Speakers/Index', [
      'speakers' => SpeakerResource::collection($speakers),
    ]);
  }


  /**
   * Search for speakers based on a query.
   *
   * This method handles the search functionality for speakers. It retrieves the speakers
   * that match the search query, paginates the results, and renders the 'Admin/Speakers/Index'
   * component using the Inertia.js library. The paginated speakers and the search query
   * are passed as props to the component.
   *
   * @param Request $request The request object containing the search query.
   *
   * @return \Inertia\Response The Inertia response containing the paginated list of speakers and the search query.
   */
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
   *
   * This method renders the form for creating a new speaker.
   * It retrieves all topics and categories, maps them to a specific format,
   * and passes them along with locations to the 'Admin/Speakers/Create' component
   * using the Inertia.js library.
   *
   * @return \Inertia\Response The Inertia response containing the form for creating a new speaker.
   */
  public function create(): Response
  {
    $topics = Topic::all()->map(function ($topic) {
      return [
        'value' => $topic->id,
        'label' => $topic->name,
      ];
    });

    $categories = Category::all()->map(function ($category) {
      return [
        'value' => $category->id,
        'label' => $category->name,
      ];
    });


    return Inertia::render('Admin/Speakers/Create', [
      'locations'          => Location::all(),
      'topics'             => $topics,
      'categories'         => $categories,
      'selectedCategories' => [],
    ]);
  }


  /**
   * Store a newly created resource in storage.
   *
   * This method handles the creation of a new speaker. It validates the request data,
   * creates a new speaker with the provided data, synchronizes the categories and topics,
   * and optionally handles the upload of an image file associated with the speaker.
   *
   * @param StoreSpeakerRequest $request The request object containing the validated data for the new speaker.
   *
   * @return void
   */
  public function store(StoreSpeakerRequest $request): void
  {
    // Extract the category IDs from the request data
    $categoryIds = array_map(function ($category) {
      return $category['value'];
    }, $request->input('categories'));

    // Extract the Topic IDs from the request data
    $topicIds = array_map(function ($topic) {
      return $topic['value'];
    }, $request->input('topics'));

    // Create a new speaker with the provided data
    $speaker = Speaker::create([
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
    $speaker->categories()->sync($categoryIds);

    // Sync the topics to the speaker
    $speaker->topics()->sync($topicIds);

    // Handle the upload of an image file if provided
    if ($request->hasFile('image')) {
      $speaker->addMediaFromRequest('image')
        ->toMediaCollection('avatar');
    }
  }


  /**
   * Display the specified resource.
   *
   * This method retrieves the specified speaker and renders the 'Admin/Speakers/Show' component
   * using the Inertia.js library. The speaker, along with their associated videos and FAQs,
   * are passed as props to the component.
   *
   * @param Speaker $speaker The speaker model instance to be displayed.
   *
   * @return \Inertia\Response The Inertia response containing the speaker details, videos, and FAQs.
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
   *
   * This method renders the form for editing an existing speaker.
   * It retrieves the speaker's associated categories and topics, maps them to a specific format,
   * and passes them along with all available topics, categories, and locations to the 'Admin/Speakers/Create'
   * component using the Inertia.js library.
   *
   * @param Speaker $speaker The speaker model instance to be edited.
   *
   * @return \Inertia\Response The Inertia response containing the form for editing the speaker.
   */
  public function edit(Speaker $speaker)
  {
    $selectedCategories = $speaker->categories->map(function ($category) {
      return [
        'value' => $category->id,
        'label' => $category->name,
      ];
    });

    $selectedTopics = $speaker->topics->map(function ($topic) {
      return [
        'value' => $topic->id,
        'label' => $topic->name,
      ];
    });

    $topics = Topic::all()->map(function ($topic) {
      return [
        'value' => $topic->id,
        'label' => $topic->name,
      ];
    });

    $categories = Category::all()->map(function ($category) {
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
      'selectedTopics'     => $selectedTopics,
    ]);
  }


  /**
   * Update the specified resource in storage.
   *
   * This method handles the update of an existing speaker. It validates the request data,
   * retrieves the speaker by ID, updates the speaker with the provided data, synchronizes
   * the categories and topics, and optionally handles the upload of an image file associated
   * with the speaker.
   *
   * @param SpeakerUpdateRequest $request The request object containing the validated data for the speaker.
   * @param string $id The ID of the speaker to be updated.
   *
   * @return \Illuminate\Http\RedirectResponse The redirect response to the speakers index route.
   */
  public function update(SpeakerUpdateRequest $request, string $id): RedirectResponse
  {
    $request->validated();

    $speaker = Speaker::find($id);

    // Extract the category IDs from the request data
    $categoryIds = [];
    if (isset($request->input('categories')[0]['value'])) {
      $categoryIds = array_map(function ($category) {
        return $category['value'];
      }, $request->input('categories'));
    }

    // Extract the topic IDs from the request data
    if (isset($request->input('topics')[0]['value'])) {
      $topicIds = array_map(function ($topic) {
        return $topic['value'];
      }, $request->input('topics'));
    }

    // Update the speaker with the provided data
    $speaker->update([
      'first_name'       => $request->input('first_name'),
      'last_name'        => $request->input('last_name'),
      'bio'              => $request->input('bio'),
      'title'            => $request->input('title'),
      'location_id'      => $request->input('location'),
      'excerpt'          => $request->input('excerpt'),
      'featured'         => $request->boolean('featured'),
      'meta_description' => $request->input('excerpt'),
      'key_titles'       => $request->input('key_titles'),
    ]);

    // Sync the categories to the speaker
    if (!empty($categoryIds)) {
      $speaker->categories()->sync($categoryIds);
    }

    // Sync the topics to the speaker
    if (!empty($topicIds)) {
      $speaker->topics()->sync($topicIds);
    }

    // Handle the upload of an image file if provided
    if ($request->hasFile('image')) {
      $speaker->addMediaFromRequest('image')
        ->toMediaCollection('avatar');
    }

    return redirect()->route('speakers.index');
  }


  /**
   * Remove the specified resource from storage.
   *
   * This method handles the deletion of a speaker. It retrieves the speaker
   * model instance to be deleted and performs the deletion.
   *
   * @param Speaker $speaker The speaker model instance to be deleted.
   *
   * @return void
   */
  public function destroy(Speaker $speaker): void
  {
    $speaker->delete();
  }
}
