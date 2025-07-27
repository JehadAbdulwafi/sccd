<?php

use App\Http\Controllers\JournalArticleController;
use App\Http\Controllers\JournalIssueController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ContactMessageController;
use App\Http\Controllers\PublicationController;
use App\Models\Event;
use App\Models\JournalArticle;
use App\Models\JournalIssue;
use App\Models\Post;
use App\Models\Publication;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
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

  return Inertia::render('home', [
    'issues' => $issues->get(),
    'articles' => $articles,
    'posts' => $posts,
    'events' => $events,
    'publications' => $publications
  ]);
})->name('home');

Route::get('/about', function () {
  return Inertia::render('about');
})->name('about');

Route::get('/contact', function () {
  return Inertia::render('contact');
})->name('contact');

Route::get('/publications', function () {
  $publications = Publication::get();
  return Inertia::render('publications', [
    'publications' => $publications
  ]);
})->name('publications');

Route::get('/publications/{publication}', function (Publication $publication) {
  return Inertia::render('publication', [
    'publication' => $publication
  ]);
})->name('publication');

Route::post('/contact', [ContactMessageController::class, 'store'])->name('contact.store');
Route::post('/newsletter-subscribe', [App\Http\Controllers\NewsletterSubscriptionController::class, 'store'])->name('newsletter.subscribe');

Route::get('/partners', function () {
  return Inertia::render('partners');
})->name('partners');

Route::get('/structure', function () {
  return Inertia::render('structure');
})->name('structure');

Route::get('/research', function () {
  return Inertia::render('research');
})->name('research');

Route::get('/journal', function () {
  $issues = JournalIssue::withCount([
    'articles as total_articles'
  ])->get();
  return Inertia::render('journal', [
    'issues' => $issues
  ]);
})->name('journal');

Route::get('/journal/{issue}', function (JournalIssue $issue) {
  $articles = JournalArticle::where('journal_issue_id', $issue->id)
    ->get();
  return Inertia::render('issue', [
    'articles' => $articles,
    'issue' => $issue
  ]);
})->name('journal.issue');

Route::get('/news', function () {
  $posts = Post::get();
  return Inertia::render('news', [
    'posts' => $posts
  ]);
})->name('news');

Route::get('/news/{post}', function (Post $post) {
  return Inertia::render('news-details', [
    'post' => $post
  ]);
})->name('news-details');

Route::middleware(['auth', 'verified'])->group(function () {
  Route::get('dashboard', function () {
    return Inertia::render('dashboard/index');
  })->name('dashboard');

  Route::post('api/journal/issues', [JournalIssueController::class, 'store'])->name('dashboard.journal.issues.store');
  Route::put('api/journal/issues/{issue}', [JournalIssueController::class, 'update'])->name('dashboard.journal.issues.update');
  Route::delete('api/journal/issues/{issue}', [JournalIssueController::class, 'destroy'])->name('dashboard.journal.issues.destroy');
  Route::post('api/journal/issues/bulk-actions', [JournalIssueController::class, 'bulkActions'])->name('api.journal.issues.bulk-actions');
  Route::get('dashboard/journal/issues/list', [JournalIssueController::class, 'index'])->name('dashboard.journal.issues.list');
  Route::get('dashboard/journal/issues/create', [JournalIssueController::class, 'create'])->name('dashboard.journal.issues.create');
  Route::get('dashboard/journal/issues/{issue}/edit', [JournalIssueController::class, 'edit'])->name('dashboard.journal.issues.edit');

  Route::post('api/journal/articles', [JournalArticleController::class, 'store'])->name('dashboard.journal.articles.store');
  Route::put('api/journal/articles/{article}', [JournalArticleController::class, 'update'])->name('dashboard.journal.articles.update');
  Route::delete('api/journal/articles/{article}', [JournalArticleController::class, 'destroy'])->name('dashboard.journal.articles.destroy');
  Route::post('api/journal/articles/bulk-actions', [JournalArticleController::class, 'bulkActions'])->name('api.journal.articles.bulk-actions');
  Route::get('dashboard/journal/articles/list', [JournalArticleController::class, 'index'])->name('dashboard.journal.articles.list');
  Route::get('dashboard/journal/articles/create', [JournalArticleController::class, 'create'])->name('dashboard.journal.articles.create');
  Route::get('dashboard/journal/articles/{article}/edit', [JournalArticleController::class, 'edit'])->name('dashboard.journal.articles.edit');

  Route::post('api/posts', [PostController::class, 'store'])->name('dashboard.post.store');
  Route::put('api/posts/{post}', [PostController::class, 'update'])->name('dashboard.post.update');
  Route::delete('api/posts/{post}', [PostController::class, 'destroy'])->name('dashboard.post.destroy');
  Route::post('api/posts/bulk-actions', [PostController::class, 'bulkActions'])->name('api.posts.bulk-actions');
  Route::get('dashboard/posts/list', [PostController::class, 'index'])->name('dashboard.posts.list');
  Route::get('dashboard/posts/create', [PostController::class, 'create'])->name('dashboard.posts.create');
  Route::get('dashboard/posts/{post}/edit', [PostController::class, 'edit'])->name('dashboard.posts.edit');

  Route::post('api/users', [UserController::class, 'store'])->name('dashboard.users.store');
  Route::put('api/users/{user}', [UserController::class, 'update'])->name('dashboard.users.update');
  Route::delete('api/users/{user}', [UserController::class, 'destroy'])->name('dashboard.users.destroy');
  Route::get('dashboard/users/list', [UserController::class, 'index'])->name('dashboard.users.list');
  Route::get('dashboard/users/create', [UserController::class, 'create'])->name('dashboard.users.create');
  Route::get('dashboard/users/{user}/edit', [UserController::class, 'edit'])->name('dashboard.users.edit');
  Route::post('api/users/bulk-actions', [UserController::class, 'bulkActions'])->name('api.users.bulk-actions');

  Route::get('dashboard/partners/list', [App\Http\Controllers\PartnerController::class, 'index'])->name('dashboard.partners.list');
  Route::get('dashboard/partners/create', [App\Http\Controllers\PartnerController::class, 'create'])->name('dashboard.partners.create');
  Route::get('dashboard/partners/{partner}/edit', [App\Http\Controllers\PartnerController::class, 'edit'])->name('dashboard.partners.edit');
  Route::post('api/partners', [App\Http\Controllers\PartnerController::class, 'store'])->name('api.partners.store');
  Route::put('api/partners/{partner}', [App\Http\Controllers\PartnerController::class, 'update'])->name('api.partners.update');
  Route::delete('api/partners/{partner}', [App\Http\Controllers\PartnerController::class, 'destroy'])->name('api.partners.destroy');
  Route::post('api/partners/bulk-actions', [App\Http\Controllers\PartnerController::class, 'bulkActions'])->name('api.partners.bulk-actions');

  Route::get('dashboard/messages/list', [ContactMessageController::class, 'index'])->name('dashboard.messages.list');
  Route::get('dashboard/messages/{contactMessage}', [ContactMessageController::class, 'show'])->name('dashboard.messages.show');
  Route::delete('api/contact-messages/{contactMessage}', [ContactMessageController::class, 'destroy'])->name('api.contact-messages.destroy');
  Route::post('api/contact-messages/bulk-actions', [ContactMessageController::class, 'bulkActions'])->name('api.contact-messages.bulk-actions');

  Route::post('api/events', [EventController::class, 'store'])->name('dashboard.events.store');
  Route::put('api/events/{event}', [EventController::class, 'update'])->name('dashboard.events.update');
  Route::delete('api/events/{event}', [EventController::class, 'destroy'])->name('dashboard.events.destroy');
  Route::post('api/events/bulk-actions', [EventController::class, 'bulkActions'])->name('api.events.bulk-actions');
  Route::get('dashboard/events/list', [EventController::class, 'index'])->name('dashboard.events.list');
  Route::get('dashboard/events/create', [EventController::class, 'create'])->name('dashboard.events.create');
  Route::get('dashboard/events/{event}/edit', [EventController::class, 'edit'])->name('dashboard.events.edit');

  Route::post('api/publications', [PublicationController::class, 'store'])->name('dashboard.publications.store');
  Route::put('api/publications/{publication}', [PublicationController::class, 'update'])->name('dashboard.publications.update');
  Route::delete('api/publications/{publication}', [PublicationController::class, 'destroy'])->name('dashboard.publications.destroy');
  Route::post('api/publications/bulk-actions', [PublicationController::class, 'bulkActions'])->name('api.publications.bulk-actions');
  Route::get('dashboard/publications/list', [PublicationController::class, 'index'])->name('dashboard.publications.list');
  Route::get('dashboard/publications/create', [PublicationController::class, 'create'])->name('dashboard.publications.create');
  Route::get('dashboard/publications/{publication}/edit', [PublicationController::class, 'edit'])->name('dashboard.publications.edit');

  Route::get('dashboard/newsletter', [App\Http\Controllers\NewsletterController::class, 'index'])->name('dashboard.newsletter.index');
  Route::post('dashboard/newsletter/send', [App\Http\Controllers\NewsletterController::class, 'send'])->name('dashboard.newsletter.send');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
