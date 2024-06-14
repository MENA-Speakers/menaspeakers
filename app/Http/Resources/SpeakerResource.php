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

      $temTitles = '';


      if ($this->key_titles !== null) {
        //explode from key_titles by comma into an array
        $titles = explode(',', $this->key_titles);

        $temTitlesArray = json_decode($this->key_titles, true);

        if (is_array($temTitlesArray)) {
          $temTitles = implode(', ', $temTitlesArray);
        }
      }


      return [
          'id' => $this->id,
          'first_name' => $this->first_name,
          'last_name' => $this->last_name,
          'name' => $this->first_name . ' ' . $this->last_name,
          'image' => $this->getFirstMediaUrl('avatar', 'webp'),
          'categories'   =>    $this->categories,
          'topics'   =>    $this->topics,
          'bio' => $this->bio,
          'faqs' => $this->faqs,
          'title' => $this->title,
          'key_titles' => $titles,
          'titles' =>  $temTitles,
          'featured' => boolval($this->featured),
          'meta_title' => $this->meta_title,
          'excerpt' => $this->meta_description,
          'slug' => $this->slug,
          'keywords' => $this->keywords,
          'videos' => $this->videos,
        ];
    }
}
