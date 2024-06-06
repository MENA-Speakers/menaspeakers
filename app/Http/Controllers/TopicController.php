<?php

namespace App\Http\Controllers;

use App\Http\Resources\TopicResource;
use App\Models\Topic;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TopicController extends Controller
{


    public function index(): Response
    {
        return Inertia::render('Topic/Index', [
            'topics' => TopicResource::collection(Topic::all())
        ]);
    }
}
