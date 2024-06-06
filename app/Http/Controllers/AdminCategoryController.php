<?php

  namespace App\Http\Controllers;

  use App\Models\Category;
  use App\Models\Topic;
  use Illuminate\Http\Request;
  use Inertia\Inertia;

  class AdminCategoryController extends Controller
  {

    public function index()
    {
      $categories = Category::all();
      $topics = Topic::all();
      return Inertia::render('Admin/Categories/Index', [
        'categories' => $categories,
        'topics' => $topics,
      ]);
    }

    public function store(Request $request)
    {
      $request->validate([
        'name' => 'required|string',
      ]);

      $category = Category::create([
        'name' => $request->input('name'),
      ]);

      return $category;
    }



    public function delete(Category $category)
    {
      // Detach the related speakers from the category
      $category->speakers()->detach();

      // Delete the category
      $category->delete();

      return back();
    }


  }
