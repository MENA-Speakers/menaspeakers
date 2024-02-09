<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProposalResource extends JsonResource
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
            'hash_id' => $this->hash_id,
            'deal_id' => $this->deal_id,
            'title' => $this->title,
            'status' => ucfirst($this->status),
            'slug' => $this->slug,
            'responsible_id' => $this->responsible_id,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'responsible' => $this->responsible,
            'rate_cards' => RateCardResource::collection($this->rateCards),
        ];
    }
}
