<?php

namespace App\Models;

use App\Traits\HashId;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Portfolio extends Model
{
    use HasFactory, HashId;

    protected $guarded = ['id'];

    public function profile(): BelongsTo
    {
        return $this->belongsTo(Profile::class);
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
