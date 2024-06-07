<?php

  namespace App\Http\Controllers;

  use App\Http\Resources\CategoryResource;
  use App\Http\Resources\TopicResource;
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
        'categories' => CategoryResource::collection($categories),
        'topics' => TopicResource::collection($topics),
      ]);
    }

    public function store(Request $request)
    {
      $request->validate([
        'name' => 'required|string',
        'image' => 'required|image',
      ]);

      $category = Category::create([
        'name' => $request->input('name'),
      ]);

      if($request->hasFile('image')){
        $category->addMediaFromRequest('image')->toMediaCollection('image');
      }
      return CategoryResource::make($category);
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
