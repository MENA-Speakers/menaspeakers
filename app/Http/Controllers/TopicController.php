<?php

namespace App\Http\Controllers;

use App\Http\Resources\SpeakerResource;
use App\Http\Resources\TopicResource;
use App\Models\Topic;
use Inertia\Inertia;
use Inertia\Response;

class TopicController extends Controller
{


    public function index(): Response
    {
        return Inertia::render('Topics/Index', [
            'topics' => TopicResource::collection(Topic::all())
        ]);
    }


    public function show(Topic $topic): Response
    {

      $speakers = $topic->speakers;
        return Inertia::render('Topics/Show', [
            'topic' => new TopicResource($topic),
            'speakers' => $topic->speakers()->exists() ? SpeakerResource::collection($speakers) : [],
        ]);
    }
}
