<?php

namespace App\Http\Controllers;

use App\Mail\NewLeadNotification;
use App\Models\Lead;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class AdminLeadController extends Controller
{

  public function store(Request $request)
  {

    $request->validate([
      'full_name' => 'required|string',
      'email' => 'required|email',
      'phone' => 'required|string',
      'message' => 'required|string',
    ]);


    $lead = Lead::create([
      'name' => $request->full_name,
      'email' => $request->email,
      'phone' => $request->phone,
      'message' => $request->message,
      'source' => $request->source,
      'speaker_id' => $request->speaker_id,
    ]);

    // Send email to the admin
    Mail::to('marketing@mena-speakers.com')->send(new NewLeadNotification($lead));
//
//    $client = new Client(); //GuzzleHttp\Client
//    $url = 'https://mena-speaker.bitrix24.com/rest/15/lf1wvpu1mgx5sm9i/crm.deal.add.json';
//
//    $response = $client->request('POST', $url, [
//      'json' => [
//        'fields' => [
//          'TITLE' => 'MENA Speaker Contact Form footer Lead' . ' - '.$lead->name ,
//          'NAME' => $lead->name,
//          'EMAIL' => $lead->email,
//          'PHONE' => $lead->phone,
//          'COMMENTS' => $lead->message,
//        ],
//      ]
//    ]);



    return redirect()->back();
  }

}
