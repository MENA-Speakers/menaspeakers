<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\PortfolioResource;
use App\Models\Portfolio;
use Illuminate\Http\Request;

class ProposalPortfolioController extends Controller
{
    public function index(Request $request)
    {

      //Search for portfolios take 8 from the database
      if($request->has('search')){
        return PortfolioResource::collection(Portfolio::search($request->input('search'))->take(8)->get());
      }

      return PortfolioResource::collection(Portfolio::take(8)->get());
    }
}
