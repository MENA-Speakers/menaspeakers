<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BlogResource extends JsonResource
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
          'title' => $this->title,
          'slug' => $this->slug,
          'excerpt' => $this->excerpt,
          'content' => $this->content,
          'meta_title' => $this->meta_title,
          'meta_description' => $this->meta_description,
          'keywords' => $this->keywords,
          'published_at' => $this->updated_at->format('Y-m-d'),
          'image' => $this->getFirstMediaUrl('image'),
        ];
    }
}
