<?php

namespace App\Http\Controllers;

use App\Http\Resources\ImageResource;
use App\Models\Image;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GalleryController extends Controller
{
    public function index()
    {
        return Inertia::render('Gallery/Index', [
          'gallery' => ImageResource::collection(Image::latest()->get())
        ]);
    }
}
