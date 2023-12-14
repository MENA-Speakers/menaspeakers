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
        return [
            'id' => $this->hash_id,
            'title' => $this->title,
            'summary' => $this->summary,
            'body' => $this->body,
            'profile_id' => $this->profile_id,
            'fee' => $this->fee,
            'profile' => new ProfileResource($this->profile),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
