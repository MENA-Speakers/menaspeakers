<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class DealController extends Controller
{

  public function index()
  {
    return Inertia::render('Admin/Deals/Index');
  }
}
