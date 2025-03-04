<?php

namespace App\Http\Controllers;

use App\Http\Resources\ImageResource;
use App\Models\Image;
use Artesaos\SEOTools\Facades\SEOTools;
use Inertia\Inertia;

class GalleryController extends Controller
{
/**
    * Display the gallery page with the latest images.
    *
    * This method sets the SEO metadata for the gallery page and retrieves the latest
    * images from the database. It then renders the 'Gallery/Index' view with these images.
    *
    * @return \Inertia\Response
    */
   public function index()
   {
       // Set SEO metadata for the gallery page
       SEOTools::setTitle('Gallery | MENA Speakers');
       SEOTools::setDescription('Browse the MENA Speakers gallery to relive inspiring moments from past events. View highlights of world-renowned speakers and transformative engagements in the Middle East.');

       // Render the 'Gallery/Index' view with the latest images
       return Inertia::render('Gallery/Index', [
           'gallery' => ImageResource::collection(Image::latest()->get())
       ]);
   }
}
