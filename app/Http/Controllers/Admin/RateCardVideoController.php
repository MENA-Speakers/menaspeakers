<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\RateCardResource;
use App\Http\Resources\VideoLinkResource;
use App\Models\RateCard;
use Illuminate\Http\Request;

class RateCardVideoController extends Controller
{

  public function store(Request $request, RateCard $rateCard)
  {

    $request->validate([
      'link' => 'required|url',
    ]);

    $rateCard->videoLinks()->create([
      'link' => $request->link,
    ]);

    return RateCardResource::make($rateCard->refresh());
  }

  public function destroy(RateCard $rateCard, $video): RateCardResource
  {

    $rateCard->videoLinks()->where('id', $video)->delete();

    return RateCardResource::make($rateCard->refresh());
  }
}
