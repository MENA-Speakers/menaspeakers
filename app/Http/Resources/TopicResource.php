<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TopicResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'speaker_count' => $this->speakers?->count(),
            'image' => $this->getFirstMediaUrl('image', 'webp'),
            'speakers' => SpeakerResource::collection($this->speakers),
        ];
    }
}
