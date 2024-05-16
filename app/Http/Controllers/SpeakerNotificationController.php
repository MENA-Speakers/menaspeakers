<?php

namespace App\Http\Controllers;

use App\Models\Deal;
use App\Models\Profile;
use App\Models\User;
use App\Notifications\SpeakerPitchedErrorNotification;
use App\Notifications\SpeakerPitchedNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class SpeakerNotificationController extends Controller
{

  public function pitching(Request $request){

    Log::info('request', $request->all());
    //get responsible user
    $user = User::firstOrCreate([
      'email' => $request->input('responsible_email')],
      [
        'name' => $request->input('responsible_name'),
        'email' => $request->input('responsible_email'),
        'phone' => $request->input('responsible_phone'),
      ]
    );

    Log::info('user', $user->toArray() );
    //get request data
    $speakerString = $request->input('speakers');

    $deal = Deal::firstOrCreate([
      'bitrix_deal_id' => $request->input('bitrix_deal_id')],
      [
        'title' => $request->input('title'),
        'date' => $request->input('event_date'),
        'responsible_id' => $user->id,
        'client_name' => $request->input('client_name'),
        'event_type' => $request->input('event_type'),
      ]
    );

    Log::info('deal', $deal->toArray() );
    //split the string into an array separated by commas
    $speakers = explode(',', $speakerString);

    //loop through the array and send notification to each speaker
    foreach($speakers as $speaker){
      $currentSpeaker = Profile::search($speaker)->first();
      if($currentSpeaker){
        $currentSpeaker->user->notify(new SpeakerPitchedNotification($currentSpeaker, $deal));
      } else {

        $user->notify(new SpeakerPitchedErrorNotification($speaker, $deal));
      }
    }

  }
}
