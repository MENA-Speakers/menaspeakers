<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\SpeakerResource;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
  public function index()
  {
    $categories = Category::all();
    return Inertia::render('Categories/Index', [
      'categories' => CategoryResource::collection($categories),
    ]);
  }


  public function show(Category $category)
  {

    $speakers = $category->speakers;
    return Inertia::render('Categories/Show', [
      'category' => new CategoryResource($category),
      'speakers' => $category->speakers()->exists() ? SpeakerResource::collection($speakers) : [],
    ]);
  }
}
