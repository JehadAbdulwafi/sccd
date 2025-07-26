<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JournalSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $issue = \App\Models\JournalIssue::create([
      'title' => 'العدد 1 - مارس 2023',
      'cover_image' => 'cover1.jpg',
      'published_at' => '2023-03-01',
    ]);

    $article = $issue->articles()->create([
      'title' => 'الخبر التليفزيوني وبناء النشرة الإخبارية',
      'file_path' => 'files/news_broadcast.pdf',
    ]);

    $article->authors()->createMany([
      [
        'name' => 'أ.د. إيمان محمد فرج',
        'affiliation' => 'مدرسة الإعلام والفنون بالأكاديمية الليبية',
      ],
      [
        'name' => 'د. حسين المختار الشاوش',
        'affiliation' => 'مدرسة الإعلام والفنون بالأكاديمية الليبية',
      ],
    ]);
  }
}
