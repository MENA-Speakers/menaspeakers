<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProfileResource;
use App\Http\Resources\RateCardResource;
use App\Http\Resources\VideoLinkResource;
use App\Models\Profile;
use App\Models\RateCard;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Inertia\Inertia;

class AdminRateCardController extends Controller
{


  public function index(Profile $profile): \Inertia\Response
  {

    $rateCards = $profile->rateCards;

    //collect ratecards from speaker proposals and add to ratecards collection


    return Inertia::render(
      'Admin/Profiles/RateCards/Index',
      [
        'rateCards' => RateCardResource::collection($rateCards),
        'profile' => ProfileResource::make($profile),
      ]
    );
  }





  public function destroy(RateCard $rateCard): AnonymousResourceCollection
  {
    $rateCard->delete();
    return VideoLinkResource::collection($rateCard->videoLinks);
  }

}
