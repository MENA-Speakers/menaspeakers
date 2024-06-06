<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Topic extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

  public function speakers(): BelongsToMany
  {
    return $this->belongsToMany(Speaker::class, 'speaker_topics');
  }
}
