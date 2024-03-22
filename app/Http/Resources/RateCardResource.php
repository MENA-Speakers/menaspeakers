<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RateCardResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
  public function toArray(Request $request): array
  {
    $gallery = [];

    // Check if model has media
    if($this->hasMedia('gallery')){
      // Get media and URL for this media and add to gallery array
      $mediaItems = $this->getMedia('gallery');

      $gallery = $mediaItems->map(function ($media) {
        return [
          'id' => $media->id,
          'url' => $media->getUrl(),
        ];
      })->toArray();
    }

    return [
      'id' => $this->id,
      'hash_id' => $this->hash_id,
      'portfolio' => new PortfolioResource($this->portfolio),
      'portfolio_id' => $this->portfolio_id,
      'proposal_id' => $this->proposal_id,
      'currency' => $this->currency,
      'profile' => new ProfileResource($this->profile),
      'title' => $this->title,
      'videos' => VideoLinkResource::collection($this->videoLinks),
      'gallery' => $gallery,
      'summary' => $this->summary,
      'fee' => $this->fee,
      'created_at' => $this->created_at,
      'updated_at' => $this->updated_at,
    ];
  }
}
