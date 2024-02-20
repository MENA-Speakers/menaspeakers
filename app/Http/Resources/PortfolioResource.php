<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PortfolioResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

      //get and set media gallery with url
      $gallery = [];
      // check if portfolio has media

//
//      if($this->hasMedia('gallery')){
//        foreach ($this->media as $media) {
//          $gallery[] = [
//            'id' => $media->id,
//            'url' => $media->getFullUrl(),
//          ];
//        }
//      }

        return [
            'id' => $this->id,
            'hash_id' => $this->hash_id,
            'title' => $this->title,
            'summary' => $this->summary,
            'gallery' => $gallery,
            'profile_id' => $this->profile_id,
            'portfolio_id' => $this->portfolio_id,
            'fee' => $this->fee,
            'profile' => new ProfileResource($this->profile),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
