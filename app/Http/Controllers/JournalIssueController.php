<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreJournalIssueRequest;
use App\Http\Requests\UpdateJournalIssueRequest;
use App\Http\Resources\JournalIssueResource;
use App\Models\JournalIssue;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JournalIssueController extends Controller
{
  public function index()
  {
    $issues = JournalIssue::withCount([
      'articles as total_articles'
    ])->with('articles')->get();
    return Inertia::render('dashboard/journal/issues-list', [
      'issues' => $issues
    ]);
  }

  public function create()
  {
    return Inertia::render('dashboard/journal/issues-create');
  }

  public function edit(JournalIssue $issue)
  {
    return Inertia::render('dashboard/journal/issues-edit', [
      'issue' => $issue,
    ]);
  }

  public function store(StoreJournalIssueRequest $request)
  {
    $data = $request->validated();

    // if ($request->hasFile('cover_image')) {
    //   $path = $request->file('cover_image')->store('journal-covers', 'public');
    //   $data['cover_image'] = asset('storage/' . $path);
    // }

    JournalIssue::create($data);

    return to_route("dashboard.journal.issues.list");
  }

  public function show(JournalIssue $journalIssue)
  {
    return Inertia::render('dashboard/journal/issue-details', [
      'issue' => $journalIssue
    ]);
  }


  public function update(UpdateJournalIssueRequest $request, JournalIssue $issue)
  {
    $data = $request->validated();

    // if ($request->hasFile('cover_image')) {
    //   $path = $request->file('cover_image')->store('journal-covers', 'public');
    //   $data['cover_image'] = asset('storage/' . $path);
    // } else if (empty($data['cover_image'])) {
    //   $data['cover_image'] = $issue->cover_image;
    // }

    $issue->update($data);

    return to_route("dashboard.journal.issues.list", $issue->id);
  }

  public function destroy(JournalIssue $journalIssue)
  {
    $journalIssue->delete();

    return to_route("dashboard.journal.issues.list");
  }

  public function bulkActions(Request $request)
  {
    $action = $request->input('action');
    $entries = $request->input('entries');

    switch ($action) {
      case 'delete_selected':
        JournalIssue::whereIn('id', $entries)->delete();
        return to_route("dashboard.journal.issues.list");
      default:
        return to_route("dashboard.journal.issues.list");
    }
  }
}
