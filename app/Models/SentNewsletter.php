<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SentNewsletter extends Model
{
    protected $fillable = ['subject', 'content', 'recipients_count'];
}
