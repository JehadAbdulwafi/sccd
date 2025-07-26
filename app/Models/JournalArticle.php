<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JournalArticle extends Model
{
  protected $table = 'journal_articles';
  protected $fillable = [
    'journal_issue_id',
    'title',
    'file_path',
    'authors',
    'tag',
  ];

  protected $casts = [
    'authors' => 'array',
  ];

  public function issue()
  {
    return $this->belongsTo(JournalIssue::class, 'journal_issue_id');
  }
}
