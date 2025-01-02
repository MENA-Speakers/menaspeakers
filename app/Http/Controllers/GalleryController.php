<?php

namespace App\Http\Controllers;

use App\Http\Resources\ImageResource;
use App\Models\Image;
use Artesaos\SEOTools\SEOTools;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GalleryController extends Controller
{
    public function index()
    {

      SEOTools::SetTitle('Gallery | MENA Speakers');
      SEOTools::setDescription('Browse the MENA Speakers gallery to relive inspiring moments from past events. View highlights of world-renowned speakers and transformative engagements in the Middle East.
');
        return Inertia::render('Gallery/Index', [
          'gallery' => ImageResource::collection(Image::latest()->get())
        ]);
    }
}
