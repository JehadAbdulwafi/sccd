<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Publication extends Model
{
    protected $fillable = [
        'image',
        'file',
        'authors',
        'title',
        'description',
        'published_at',
        'tag',
    ];

    protected $casts = [
        'authors' => 'array',
        'published_at' => 'date',
    ];
}
