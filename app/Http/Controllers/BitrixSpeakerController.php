<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Illuminate\Http\Request;

class BitrixSpeakerController extends Controller
{
    public function store(Request $request): \Illuminate\Http\JsonResponse
    {


      $profile = Profile::updateOrCreate([
        'bitrix_id' => $request->input('ID')],
        [
          'name' => $request->input('NAME'),
          'email' => $request->input('EMAIL'),
        ]
      );

      return response()->json($profile);
    }
}
