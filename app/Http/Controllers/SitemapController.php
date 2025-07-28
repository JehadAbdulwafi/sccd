<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Publication;
use App\Models\JournalIssue;
use Illuminate\Http\Request;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class SitemapController extends Controller
{
  public function generate(Request $request)
  {
    $sitemap = Sitemap::create()
      ->add(Url::create('/')->setPriority(1.0)->setChangeFrequency(Url::CHANGE_FREQUENCY_DAILY))
      ->add(Url::create('/about')->setPriority(0.8)->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY))
      ->add(Url::create('/contact')->setPriority(0.8)->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY))
      ->add(Url::create('/publications')->setPriority(0.8)->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY))
      ->add(Url::create('/partners')->setPriority(0.8)->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY))
      ->add(Url::create('/journal')->setPriority(0.8)->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY))
      ->add(Url::create('/news')->setPriority(0.8)->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY));

    Publication::all()->each(function (Publication $publication) use ($sitemap) {
      $sitemap->add(Url::create("/publications/{$publication->id}")->setPriority(0.7)->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY));
    });

    JournalIssue::all()->each(function (JournalIssue $issue) use ($sitemap) {
      $sitemap->add(Url::create("/journal/{$issue->id}")->setPriority(0.7)->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY));
    });

    Post::all()->each(function (Post $post) use ($sitemap) {
      $sitemap->add(Url::create("/news/{$post->id}")->setPriority(0.7)->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY));
    });

    return $sitemap->toResponse($request);
  }
}
