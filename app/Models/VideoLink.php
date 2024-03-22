<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class VideoLink extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function videoLinkable(): MorphTo
    {
        return $this->morphTo();
    }
}
