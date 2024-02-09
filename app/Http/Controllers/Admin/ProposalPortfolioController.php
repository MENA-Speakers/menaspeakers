<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\PortfolioResource;
use App\Models\Portfolio;
use Illuminate\Http\Request;

class ProposalPortfolioController extends Controller
{
    public function index()
    {
      return PortfolioResource::collection(Portfolio::all());
    }
}
