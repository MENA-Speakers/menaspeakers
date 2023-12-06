<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProfileResource;
use App\Models\Location;
use App\Models\Profile;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LocationController extends Controller
{
    public function show(Location $location){
      //get all locations and filter out the current location
      $locations = Location::all()->filter(function($value, $key) use ($location){
        return $value->id != $location->id;
      })->values();
      return Inertia::render('Locations/Show', [
          'speakers' => ProfileResource::collection($location->speakers()->paginate(12)),
          'locations' => $locations,
          'location' => $location
      ]);
    }


    public function search(Location $location, Request $request){
      $locations = Location::all()->filter(function($value, $key) use ($location){
        return $value->id != $location->id;
      });

      //Search speakers and filter by location
      $speakers = Profile::search($request->input('query'))
        ->where('location_id', $location->id)
        ->paginate(12)->withQueryString();

      return Inertia::render('Locations/Show', [
          'locations' => $locations,
          'location' => $location,
          'speakers' => ProfileResource::collection($speakers),
      ]);
    }
}
