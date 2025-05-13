<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmailBlacklist extends Model
{
    use HasFactory;

    protected $table = 'email_blacklist';
    
    protected $fillable = [
        'name',
        'email',
        'reason'
    ];

    public static function isBlacklisted($email)
    {
        return self::where('email', $email)->exists();
    }
}