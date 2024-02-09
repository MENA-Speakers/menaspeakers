<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreRateCardRequest;
use App\Http\Requests\UpdateRateCardRequest;
use App\Http\Resources\RateCardResource;
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
    if (empty($request->portfolios)) {
      return RateCardResource::collection($proposal->rateCards);
    }

    //Loop and create rate card from request cards array
    foreach ($request->portfolios as $portfolio) {

      //Check if portfolio already exists
      if ($proposal->rateCards()->where('portfolio_id', $portfolio['id'])->exists()) {
        continue;
      }

      $proposal->rateCards()->create([
        'title' => $portfolio['title'],
        'body' => $portfolio['body'],
        'fee' => $portfolio['fee'],
        'profile_id' => $portfolio['profile_id'],
        'portfolio_id' => $portfolio['id'],
        'summary' => $portfolio['summary'],
        'proposal_id' => $proposal->id,
      ]);

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
      'title' => $request->title,
      'body' => $request->body,
      'fee' => $request->fee,
      'summary' => $request->summary,
    ]);

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
