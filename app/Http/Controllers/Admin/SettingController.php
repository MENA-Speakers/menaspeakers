<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\LocationResource;
use App\Models\Location;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingController extends Controller
{

  public function location(){
    return Inertia::render('Admin/Dashboard', [
      'locations' => Location::all()
    ]);
  }

  public function store(Request $request){
    $request->validate([
      'name' => 'required'
    ]);

    Location::create([
      'name' => $request->input('name'),
    ]);

    return LocationResource::collection(Location::all());

  }
}
