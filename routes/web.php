<?php

use App\Http\Controllers\JournalArticleController;
use App\Http\Controllers\JournalIssueController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ContactMessageController;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\PartnerController;
use App\Http\Controllers\PublicationController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\SitemapController;
use App\Http\Controllers\WebsiteController;

Route::get('/sitemap.xml', [SitemapController::class, 'generate']);

Route::get('/', [WebsiteController::class, 'home'])->name('home');
Route::get('/about', [WebsiteController::class, 'about'])->name('about');
Route::get('/contact', [WebsiteController::class, 'contact'])->name('contact');
Route::get('/partners', [WebsiteController::class, 'partners'])->name('partners');
Route::get('/journal', [WebsiteController::class, 'journal'])->name('journal');
Route::get('/journal/{issue}', [WebsiteController::class, 'issue'])->name('journal.issue');
Route::get('/publications', [WebsiteController::class, 'publications'])->name('publications');
Route::get('/publications/{publication}', [WebsiteController::class, 'publication'])->name('publication');
Route::get('/news', [WebsiteController::class, 'posts'])->name('news');
Route::get('/news/{post}', [WebsiteController::class, 'post'])->name('news-details');

Route::post('/contact', [ContactMessageController::class, 'store'])->name('contact.store');
Route::post('/newsletter-subscribe', [App\Http\Controllers\NewsletterSubscriptionController::class, 'store'])->name('newsletter.subscribe');

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

  Route::get('dashboard/partners/list', [PartnerController::class, 'index'])->name('dashboard.partners.list');
  Route::get('dashboard/partners/create', [PartnerController::class, 'create'])->name('dashboard.partners.create');
  Route::get('dashboard/partners/{partner}/edit', [PartnerController::class, 'edit'])->name('dashboard.partners.edit');
  Route::post('api/partners', [PartnerController::class, 'store'])->name('api.partners.store');
  Route::put('api/partners/{partner}', [PartnerController::class, 'update'])->name('api.partners.update');
  Route::delete('api/partners/{partner}', [PartnerController::class, 'destroy'])->name('api.partners.destroy');
  Route::post('api/partners/bulk-actions', [PartnerController::class, 'bulkActions'])->name('api.partners.bulk-actions');

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

  Route::get('dashboard/newsletter', [NewsletterController::class, 'index'])->name('dashboard.newsletter.index');
  Route::post('dashboard/newsletter/send', [NewsletterController::class, 'send'])->name('dashboard.newsletter.send');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
