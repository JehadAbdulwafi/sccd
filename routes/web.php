<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ContactMessageController;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\PartnerController;
use App\Http\Controllers\SiteContentController;
use App\Http\Controllers\FaqController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\SitemapController;
use App\Http\Controllers\WebsiteController;

Route::get('/sitemap.xml', [SitemapController::class, 'generate']);

Route::get('/', [WebsiteController::class, 'home'])->name('home');
Route::get('/about', [WebsiteController::class, 'about'])->name('about');
Route::get('/contact', [WebsiteController::class, 'contact'])->name('contact');
Route::get('/partners', [WebsiteController::class, 'partners'])->name('partners');
Route::get('/news', [WebsiteController::class, 'posts'])->name('news');
Route::get('/news/{post}', [WebsiteController::class, 'post'])->name('news-details');

Route::get('/terms', fn() => app(SiteContentController::class)->show('terms'))->name('terms');
Route::get('/policies', fn() => app(SiteContentController::class)->show('policies'))->name('policies');

Route::get('/faq', [FaqController::class, 'index'])->name('faq');

Route::post('/contact', [ContactMessageController::class, 'store'])->name('contact.store');
Route::post('/newsletter-subscribe', [App\Http\Controllers\NewsletterSubscriptionController::class, 'store'])->name('newsletter.subscribe');

Route::middleware(['auth', 'verified'])->group(function () {
  Route::get('dashboard', function () {
    return Inertia::render('dashboard/index');
  })->name('dashboard');

  Route::post('dashboard/posts', [PostController::class, 'store'])->name('dashboard.post.store');
  Route::put('dashboard/posts/{post}', [PostController::class, 'update'])->name('dashboard.post.update');
  Route::delete('dashboard/posts/{post}', [PostController::class, 'destroy'])->name('dashboard.post.destroy');
  Route::post('dashboard/posts/bulk-actions', [PostController::class, 'bulkActions'])->name('dashboard.posts.bulk-actions');
  Route::get('dashboard/posts/list', [PostController::class, 'index'])->name('dashboard.posts.list');
  Route::get('dashboard/posts/create', [PostController::class, 'create'])->name('dashboard.posts.create');
  Route::get('dashboard/posts/{post}/edit', [PostController::class, 'edit'])->name('dashboard.posts.edit');

  Route::post('dashboard/users', [UserController::class, 'store'])->name('dashboard.users.store');
  Route::put('dashboard/users/{user}', [UserController::class, 'update'])->name('dashboard.users.update');
  Route::delete('dashboard/users/{user}', [UserController::class, 'destroy'])->name('dashboard.users.destroy');
  Route::get('dashboard/users/list', [UserController::class, 'index'])->name('dashboard.users.list');
  Route::get('dashboard/users/create', [UserController::class, 'create'])->name('dashboard.users.create');
  Route::get('dashboard/users/{user}/edit', [UserController::class, 'edit'])->name('dashboard.users.edit');
  Route::post('dashboard/users/bulk-actions', [UserController::class, 'bulkActions'])->name('dashboard.users.bulk-actions');

  Route::get('dashboard/partners/list', [PartnerController::class, 'index'])->name('dashboard.partners.list');
  Route::get('dashboard/partners/create', [PartnerController::class, 'create'])->name('dashboard.partners.create');
  Route::get('dashboard/partners/{partner}/edit', [PartnerController::class, 'edit'])->name('dashboard.partners.edit');
  Route::post('dashboard/partners', [PartnerController::class, 'store'])->name('dashboard.partners.store');
  Route::put('dashboard/partners/{partner}', [PartnerController::class, 'update'])->name('dashboard.partners.update');
  Route::delete('dashboard/partners/{partner}', [PartnerController::class, 'destroy'])->name('dashboard.partners.destroy');
  Route::post('dashboard/partners/bulk-actions', [PartnerController::class, 'bulkActions'])->name('dashboard.partners.bulk-actions');

  Route::get('dashboard/messages/list', [ContactMessageController::class, 'index'])->name('dashboard.messages.list');
  Route::get('dashboard/messages/{contactMessage}', [ContactMessageController::class, 'show'])->name('dashboard.messages.show');
  Route::delete('dashboard/contact-messages/{contactMessage}', [ContactMessageController::class, 'destroy'])->name('dashboard.contact-messages.destroy');
  Route::post('dashboard/contact-messages/bulk-actions', [ContactMessageController::class, 'bulkActions'])->name('dashboard.contact-messages.bulk-actions');

  Route::get('dashboard/newsletter', [NewsletterController::class, 'index'])->name('dashboard.newsletter.index');
  Route::post('dashboard/newsletter/send', [NewsletterController::class, 'send'])->name('dashboard.newsletter.send');

  Route::get('dashboard/pages/terms', fn() => app(SiteContentController::class)->edit('terms'))->name('dashboard.pages.terms.edit');
  Route::put('dashboard/pages/terms', fn(Illuminate\Http\Request $request) => app(SiteContentController::class)->update($request, 'terms'))->name('dashboard.pages.terms.update');
  Route::get('dashboard/pages/policies', fn() => app(SiteContentController::class)->edit('policies'))->name('dashboard.pages.policies.edit');
  Route::put('dashboard/pages/policies', fn(Illuminate\Http\Request $request) => app(SiteContentController::class)->update($request, 'policies'))->name('dashboard.pages.policies.update');

  Route::get('dashboard/faqs', [FaqController::class, 'dashboardIndex'])->name('dashboard.faqs.index');
  Route::get('dashboard/faqs/create', [FaqController::class, 'create'])->name('dashboard.faqs.create');
  Route::post('dashboard/faqs', [FaqController::class, 'store'])->name('dashboard.faqs.store');
  Route::get('dashboard/faqs/{faq}/edit', [FaqController::class, 'edit'])->name('dashboard.faqs.edit');
  Route::put('dashboard/faqs/{faq}', [FaqController::class, 'update'])->name('dashboard.faqs.update');
  Route::delete('dashboard/faqs/{faq}', [FaqController::class, 'destroy'])->name('dashboard.faqs.destroy');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
