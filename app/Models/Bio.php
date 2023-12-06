<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Bio extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function profile(): BelongsTo
    {
        return $this->belongsTo(Speaker::class);
    }

  public function registerMediaCollections(): void
  {
    $this->addMediaCollection('gallery');
  }

  public function registerMediaConversions(Media $media = null): void
  {
    $this->addMediaConversion('webp')
        ->format('webp')
        ->performOnCollections('gallery');
  }



}
