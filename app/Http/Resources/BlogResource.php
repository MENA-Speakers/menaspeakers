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
      'published_at' => $this->updated_at->format('F j, Y'),
      'image' => $this->getFirstMediaUrl('image', 'webp'),
      'categories' => $this->categories,
      'author' => $this->author ? [
        'id' => $this->author->id,
        'name' => trim($this->author->first_name . ' ' . $this->author->last_name),
        'slug' => $this->author->slug,
        'image' => $this->author->getFirstMediaUrl('avatar', 'webp')
      ] : null,
    ];
  }
}
