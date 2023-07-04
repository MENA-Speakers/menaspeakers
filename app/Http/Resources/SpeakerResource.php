<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SpeakerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
          'id' => $this->id,
          'name' => $this->name,
          'image' => $this->getFirstMediaUrl('avatar', 'webp'),
          'bio' => $this->bio,
          'featured' => $this->featured,
          'meta_title' => $this->meta_title,
          'excerpt' => $this->excerpt,
          'slug' => $this->slug,
          'keywords' => $this->keywords,
          'videos' => $this->videos,
        ];
    }
}
