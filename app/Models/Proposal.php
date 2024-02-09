<?php

  namespace App\Models;

  use Illuminate\Database\Eloquent\Factories\HasFactory;
  use Illuminate\Database\Eloquent\Model;
  use Illuminate\Database\Eloquent\Relations\BelongsTo;
  use Illuminate\Database\Eloquent\Relations\HasMany;

  class Proposal extends Model
  {
    use HasFactory;

    protected $guarded = ['id'];

    //generate hash id for proposal
    public static function boot()
    {
      parent::boot();
      static::creating(function ($proposal) {
        $proposal->hash_id = md5(uniqid());
      });
    }


    public function getRouteKeyName(): string
    {
      return 'hash_id';
    }

    public function responsible(): BelongsTo
    {
      return $this->belongsTo(User::class);
    }

    public function portfolios(): HasMany
    {
      return $this->hasMany(Portfolio::class);
    }

    public function rateCards(): HasMany
    {
      return $this->hasMany(RateCard::class);
    }

  }
