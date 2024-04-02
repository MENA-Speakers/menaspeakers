<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreRateCardRequest;
use App\Http\Requests\UpdateRateCardRequest;
use App\Http\Resources\RateCardResource;
use App\Models\Portfolio;
use App\Models\Proposal;
use App\Models\RateCard;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ProposalRateCardController extends Controller
{


  /**
   * Get Rate Cards.
   *
   * @param Proposal $proposal
   *
   * @return AnonymousResourceCollection
   */

  public function index(Proposal $proposal): AnonymousResourceCollection
  {
    return RateCardResource::collection($proposal->rateCards);
  }


/**
   * Store Rate Card and return.
   *
   * @param StoreRateCardRequest $request
   * @param Proposal $proposal
   *
   * @return AnonymousResourceCollection
   */

public function store(Request $request, Proposal $proposal): AnonymousResourceCollection
{

    // return if no portfolios
    if (empty($request->rates)) {
        return RateCardResource::collection($proposal->rateCards);
    }


    // Get all existing portfolio ids for the proposal
    $existingPortfolioIds = $proposal->rateCards()->pluck('portfolio_id')->toArray();


    //Loop and create rate card from request cards array
    foreach ($request->rates as $rate) {

        //Check if portfolio already exists
        if (in_array($rate['id'], $existingPortfolioIds)) {
            continue;
        }

        // Find portfolio and continue if not found
        $portfolio = Portfolio::find($rate['id']);
        if (!$portfolio) {
            continue;
        }


        // Create rate card
        $currentRate = $proposal->rateCards()->create([
            'title' => $rate['title'],
            'fee' => $rate['fee'],
            'profile_id' => $rate['profile_id'],
            'location' => $portfolio->location,
            'portfolio_id' => $rate['id'],
            'summary' => $rate['summary'],
            'proposal_id' => $proposal->id,
        ]);

        //check if portfolio has media library files, then copy to rate card
        if($portfolio->hasMedia('gallery')){
            foreach ($portfolio->getMedia('gallery') as $media) {
              $media->copy($currentRate, 'gallery');
            }
        }
    }

    return RateCardResource::collection($proposal->rateCards);
}

  /**
   * Update Rate Card and return.
   *
   * @param UpdateRateCardRequest $request
   * @param $proposal
   * @param RateCard $rateCard
   *
   * @return RateCardResource
   */

  public function update(UpdateRateCardRequest $request, $proposal, RateCard $rateCard): RateCardResource
  {

    $rateCard->update([
      'fee' => $request->fee,
      'summary' => $request->summary,
      'currency' => $request->currency,
    ]);

    // check if request has file delete media library files
    if ($request->hasFile('gallery')) {
      $rateCard->clearMediaCollection('gallery');
      // add multiple files to media library
      $rateCard->addMultipleMediaFromRequest(['gallery'])->each(function ($fileAdder) {
        $fileAdder->toMediaCollection('gallery');
      });
    }

    return new RateCardResource($rateCard);
  }



  /**
   * Delete rate card.
   *
   * @param Proposal $proposal
   * @param $rateCard
   *
   * @return JsonResponse
   */

  public function destroy(Proposal $proposal, RateCard $rateCard): JsonResponse
  {
    $rateCard->delete();
    return response()->json(['message' => 'Rate card deleted.']);
  }

}
