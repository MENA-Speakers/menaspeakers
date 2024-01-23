<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SpeakerResource extends JsonResource
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
          'image' => $this->getFirstMediaUrl('avatar', 'webp'),
          'bio' => $this->bio,
          'featured' => boolval($this->featured),
          'meta_title' => $this->meta_title,
          'excerpt' => $this->meta_description,
          'slug' => $this->slug,
          'keywords' => $this->keywords,
          'videos' => $this->videos,
        ];
    }
}
