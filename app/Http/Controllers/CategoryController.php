<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
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
}
