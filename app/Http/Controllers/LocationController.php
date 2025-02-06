<?php

    namespace App\Http\Controllers;

    use App\Http\Resources\ProfileResource;
    use App\Models\Location;
    use App\Models\Speaker;
    use Illuminate\Http\Request;
    use Inertia\Inertia;

    class LocationController extends Controller
    {
        /**
         * Display the specified location and its speakers.
         *
         * @param \App\Models\Location $location
         * @return \Inertia\Response
         */
        public function show(Location $location){
            // Get all locations and filter out the current location
            $locations = Location::all()->filter(function($value, $key) use ($location){
                return $value->id != $location->id;
            })->values();

            // Render the Locations/Show page with the speakers and locations data
            return Inertia::render('Locations/Show', [
                'speakers' => ProfileResource::collection($location->speakers()->paginate(12)),
                'locations' => $locations,
                'location' => $location
            ]);
        }

        /**
         * Search for speakers in the specified location based on the query.
         *
         * @param \App\Models\Location $location
         * @param \Illuminate\Http\Request $request
         * @return \Inertia\Response
         */
        public function search(Location $location, Request $request){
            // Get all locations and filter out the current location
            $locations = Location::all()->filter(function($value, $key) use ($location){
                return $value->id != $location->id;
            });

            // Search speakers and filter by location
            $speakers = Speaker::search($request->input('query'))
                ->where('location_id', $location->id)
                ->paginate(12)->withQueryString();

            // Render the Locations/Show page with the search results and locations data
            return Inertia::render('Locations/Show', [
                'locations' => $locations,
                'location' => $location,
                'speakers' => ProfileResource::collection($speakers),
            ]);
        }
    }
