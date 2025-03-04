<?php

  namespace App\Http\Controllers;

  use App\Http\Resources\CategoryResource;
  use App\Http\Resources\SpeakerResource;
  use App\Models\Category;
  use Illuminate\Http\Request;
  use Inertia\Inertia;

  /**
   * Handles category-related actions for the application.
   */
  class CategoryController extends Controller
  {


    /**
     * Display a listing of the categories.
     *
     * This method retrieves all categories from the database and renders the
     * 'Categories/Index' view with the retrieved data.
     *
     * @return \Inertia\Response The response instance containing the rendered view.
     */
    public function index()
    {
      // Retrieve all categories
      $categories = Category::all();

      // Render the categories index page with the retrieved data
      return Inertia::render('Categories/Index', [
        'categories' => CategoryResource::collection($categories),
      ]);
    }


    /**
     * Display the specified category and its speakers.
     *
     * This method retrieves the specified category and its associated speakers
     * from the database. It then renders the 'Categories/Show' view with the
     * retrieved data.
     *
     * @param \App\Models\Category $category The category model instance.
     *
     * @return \Inertia\Response The response instance containing the rendered view.
     */
    public function show(Category $category)
    {
      // Retrieve speakers associated with the category
      $speakers = $category->speakers;

      // Render the category show page with the retrieved data
      return Inertia::render('Categories/Show', [
        'category' => new CategoryResource($category),
        'speakers' => $category->speakers()->exists() ? SpeakerResource::collection($speakers) : [],
      ]);
    }
  }
