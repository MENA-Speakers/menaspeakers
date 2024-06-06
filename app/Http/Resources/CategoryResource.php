<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return[
            'id' => $this->id,
            'slug' => $this->slug,
            'name' => $this->name,
            'speaker_count' => $this->speakers?->count(),
            'image' => $this->getFirstMediaUrl('image', 'webp'),
            'speakers' => $this->speakers ? SpeakerResource::collection($this->speakers) : null,
        ];
    }
}
