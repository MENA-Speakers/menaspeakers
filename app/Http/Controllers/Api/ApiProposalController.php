<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Deal;
use App\Models\Proposal;
use App\Models\User;
use App\Notifications\NewProposalNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ApiProposalController extends Controller
{

  public function store(Request $request)
  {

    Log::info('Creating proposal');

    $user = User::where('email', $request->input('responsible_email'))->first();
    $proposal = Proposal::create([
      'hash_id' => $request->input('hash_id'),
      'deal_id' => $request->input('deal_id'),
      'title' => $request->input('title'),
      'event_date' => $request->input('event_date'),
      'status' => 'draft', // Default status is 'draft
      'responsible_id' => $user->id,
      'slug' => $request->input('slug'),
    ]);

    Deal::create([
      'bitrix_deal_id' => $request->input('bitrix_deal_id'),
      'title' => $request->input('title'),
      'date' => $request->input('event_date'),
      'responsible_id' => $user->id,
    ]);

    Log::info('New proposal created', ['proposal' => $proposal]);


    //Send notification to responsible user
//    $user->notify(new NewProposalNotification($proposal));

  }
}
