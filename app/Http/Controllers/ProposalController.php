<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProposalRequest;
use App\Http\Resources\ProposalResource;
use App\Http\Resources\RateCardResource;
use App\Models\Proposal;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProposalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $proposals = Proposal::latest()->paginate(12);

        return Inertia::render('Admin/Proposals/Index', [
            'proposals' => ProposalResource::collection($proposals),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
       return Inertia::render('Admin/Proposals/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProposalRequest $request)
    {
       Proposal::create([
            'title' => $request->input('title'),
            'summary' => $request->input('summary'),
            'profile_id' => $request->input('profile'),
            'fee' => $request->input('fee'),
        ]);

        return redirect()->route('admin.proposals.index')->with('success', 'Proposal created.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Proposal $proposal)
    {

        return Inertia::render('Admin/Proposals/Show', [
            'data' => [
                'proposal' => new ProposalResource($proposal),
                'rateCards' => RateCardResource::collection($proposal->rateCards),
            ],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }


    public function preview(Proposal $proposal)
    {

        return Inertia::render('Admin/Proposals/Preview', [
            'data' => [
                'defaultPages' => [
                  '1' => asset('images/proposals/0.png'),
                  '2' => asset('images/proposals/1.png'),
                  '3' => asset('images/proposals/2.png'),
                  '4' => asset('images/proposals/3.png'),
                  '5' => asset('images/proposals/4.png'),
                  '6' => asset('images/proposals/5.png'),
                ],
                'proposal' => new ProposalResource($proposal),
                'rateCards' => RateCardResource::collection($proposal->rateCards),
            ],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
