<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JournalIssue extends Model
{
  protected $table = 'journal_issues';
  protected $fillable = [
    'title',
    'description',
    'cover_image',
    'published_at',
  ];
  public function articles()
  {
    return $this->hasMany(JournalArticle::class);
  }
}
