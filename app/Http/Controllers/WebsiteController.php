<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\JournalArticle;
use App\Models\JournalIssue;
use App\Models\Post;
use App\Models\Publication;
use Inertia\Inertia;

class WebsiteController extends Controller
{
  public function home()
  {
    $issues = JournalIssue::withCount([
      'articles as total_articles'
    ]);

    $articles = JournalArticle::addSelect([
      'journal_issue_title' => JournalIssue::select('title')
        ->whereColumn('journal_issues.id', 'journal_issue_id')
    ])->latest()->take(10)->get();

    $posts = Post::latest()->take(10)->get();
    $events = Event::latest()->take(10)->get();
    $publications = Publication::latest()->take(10)->get();

    return Inertia::render(
      'home',
      [
        'issues' => $issues->get(),
        'articles' => $articles,
        'posts' => $posts,
        'events' => $events,
        'publications' => $publications
      ]
    );
  }

  public function about()
  {
    return Inertia::render('about');
  }

  public function contact()
  {
    return Inertia::render('contact');
  }

  public function partners()
  {
    return Inertia::render('partners');
  }

  public function journal()
  {
    $issues = JournalIssue::withCount([
      'articles as total_articles'
    ])->get();
    return Inertia::render('journal', [
      'issues' => $issues
    ]);
  }

  public function issue(JournalIssue $issue)
  {
    $articles = JournalArticle::where('journal_issue_id', $issue->id)
      ->get();
    return Inertia::render('issue', [
      'articles' => $articles,
      'issue' => $issue
    ]);
  }

  public function publications()
  {
    $publications = Publication::get();
    return Inertia::render('publications', [
      'publications' => $publications
    ]);
  }

  public function publication(Publication $publication)
  {
    return Inertia::render('publication', [
      'publication' => $publication
    ]);
  }

  public function posts()
  {
    $posts = Post::get();
    return Inertia::render('news', [
      'posts' => $posts
    ]);
  }

  public function post(Post $post)
  {
    return Inertia::render('news-details', [
      'post' => $post
    ]);
  }
}
