<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreJournalArticleRequest;
use App\Http\Requests\UpdateJournalArticleRequest;
use App\Http\Resources\JournalArticleResource;
use App\Models\JournalArticle;
use App\Models\JournalIssue;
use Inertia\Inertia;
use Illuminate\Http\Request;

class JournalArticleController extends Controller
{
  public function index()
  {
    $articles = JournalArticle::addSelect([
      'journal_issue_title' => JournalIssue::select('title')
        ->whereColumn('journal_issues.id', 'journal_articles.journal_issue_id')->limit(1)
    ])->get();

    return Inertia::render('dashboard/journal/articles-list', [
      'articles' => $articles
    ]);
  }

  public function create()
  {
    $issues = JournalIssue::all();
    return Inertia::render('dashboard/journal/articles-create', [
      'issues' => $issues
    ]);
  }

  public function edit(JournalArticle $article)
  {
    $issues = JournalIssue::all();
    return Inertia::render('dashboard/journal/articles-edit', [
      'article' => $article,
      'issues' => $issues
    ]);
  }

  public function store(StoreJournalArticleRequest $request)
  {
    $data = $request->validated();

    // if ($request->hasFile('file_path')) {
    //   $path = $request->file('file_path')->store('journal-articles', 'public');
    //   $data['file_path'] = asset('storage/' . $path);
    // }

    if (isset($data['authors'])) {
      $data['authors'] = json_decode($data['authors'], true);
    }

    JournalArticle::create($data);

    return to_route("dashboard.journal.articles.list");
  }

  public function show(JournalArticle $journalArticle)
  {
    return Inertia::render('dashboard/journal/article-details', [
      'article' => $journalArticle
    ]);
  }

  public function update(UpdateJournalArticleRequest $request, JournalArticle $article)
  {
    $data = $request->validated();

    // if ($request->hasFile('file_path')) {
    //   $path = $request->file('file_path')->store('journal-articles', 'public');
    //   $data['file_path'] = asset('storage/' . $path);
    // } else if (empty($data['file_path'])) {
    //   $data['file_path'] = $article->file_path;
    // }

    if (isset($data['authors'])) {
      $data['authors'] = json_decode($data['authors'], true);
    }

    $article->update($data);

    return to_route("dashboard.journal.articles.list");
  }

  public function destroy(JournalArticle $journalArticle)
  {
    $journalArticle->delete();

    return to_route("dashboard.journal.articles.list");
  }

  public function bulkActions(Request $request)
  {
    $action = $request->input('action');
    $entries = $request->input('entries');

    switch ($action) {
      case 'delete_selected':
        JournalArticle::whereIn('id', $entries)->delete();
        return to_route("dashboard.journal.articles.list");
      default:
        return to_route("dashboard.journal.articles.list");
    }
  }
}
