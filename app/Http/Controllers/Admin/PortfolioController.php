<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePortfolioRequest;
use App\Http\Resources\PortfolioResource;
use App\Http\Resources\ProfileResource;
use App\Models\Portfolio;
use App\Models\Profile;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Portfolios/Index', [
            'portfolios' => PortfolioResource::collection(Portfolio::latest()->paginate(12)),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Portfolios/Create', [
            'profiles' => ProfileResource::collection(Profile::all()),
        ]
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePortfolioRequest $request)
    {

        $portfolio = Portfolio::create([
            'title' => $request->input('title'),
            'summary' => $request->input('summary'),
            'body' => $request->input('content'),
            'profile_id' => $request->input('profile'),
            'fee' => $request->input('fee'),
        ]);

        return redirect()->route('admin.portfolios.index')->with('success', 'Portfolio created.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Portfolio $portfolio)
    {
        return Inertia::render('Admin/Portfolios/Create', [
            'portfolio' => new PortfolioResource($portfolio),
            'profiles' => [],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
