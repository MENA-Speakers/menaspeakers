<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProfileResource;
use App\Models\Profile;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminSpeakerProposalController extends Controller
{
    public function index(Profile $profile)
    {
        return Inertia::render('Admin/Profiles/Proposals/Index', [
          'profile' => ProfileResource::make($profile),
          'proposals' => $profile->proposals()->latest()->paginate(12),
        ]);
    }
}
