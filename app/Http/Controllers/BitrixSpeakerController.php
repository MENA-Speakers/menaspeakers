<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Illuminate\Http\Request;

class BitrixSpeakerController extends Controller
{
    public function store(Request $request): \Illuminate\Http\JsonResponse
    {

      //extract first name from request full name
      $name = explode(' ', $request->input('NAME'));

      $last_name = (isset($name[1]) ? $name[1] : '') . ' ' .
               (isset($name[2]) ? $name[2] : '') . ' ' .
               (isset($name[3]) ? $name[3] : '');


      $profile = Profile::firstOrCreate([
        'bitrix_id' => $request->input('ID')],
        [
          'first_name' => $name[0],
          'last_name' => $last_name,
          'email' => $request->input('EMAIL'),
          'bitrix_id' => $request->input('ID'),
        ]
      );

      return response()->json($profile);
    }
}
