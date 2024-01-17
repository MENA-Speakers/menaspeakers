<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\PortfolioResource;
use App\Http\Resources\ProfileResource;
use App\Models\Portfolio;
use App\Models\Profile;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminSpeakerPortfolioController extends Controller
{

  public function index(Profile $profile): \Inertia\Response
  {
    $portfolios = $profile->portfolios;
    return Inertia::render('Admin/Profiles/Portfolios/Index', [
      'profile' => ProfileResource::make($profile),
      'portfolios' => PortfolioResource::collection($portfolios)
    ]);
  }
}
