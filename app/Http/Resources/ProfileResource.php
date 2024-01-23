<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use JsonSerializable;

class ProfileResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     *
     * @return array
     */
    public function toArray($request)
    {
        $gallery = $this->getMedia('gallery')->map(function ($item) {
            return [
                'id' => $item->id,
                'url' => $item->getUrl(),
            ];
        });

        return [
          'id' => $this->id,
          'hash_id' => $this->hash_id,
          'first_name' => $this->first_name,
          'last_name' => $this->last_name,
          'full_name' => $this->full_name,
          'image' => $this->getFirstMediaUrl('avatar', 'webp'),
          'about' => $this->about,
          'phone' => $this->phone,
          'email' => $this->email,
          'website' => $this->website,
          'linkedin' => $this->linkedin,
          'twitter' => $this->twitter,
          'job_title' => $this->job_title,
          'fee' => $this->fee,
          'gallery' => $gallery,
        ];
    }
}
