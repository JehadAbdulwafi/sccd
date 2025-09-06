<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Faq;
use App\Models\Partner;
use Inertia\Inertia;

class WebsiteController extends Controller
{
  public function home()
  {

    $posts = Post::latest()->take(5)->get();
    $faqs = Faq::orderBy('order')->take(5)->get();
    $partners = Partner::orderBy('created_at', 'desc')->get();

    return Inertia::render(
      'home',
      [
        'posts' => $posts,
        'faqs' => $faqs,
        'partners' => $partners
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
    $partners = Partner::orderBy('created_at', 'desc')->get();
    return Inertia::render('partners', [
      'partners' => $partners
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
