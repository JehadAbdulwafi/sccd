<?php

namespace App\Http\Controllers;

use App\Mail\NewsletterEmail;
use App\Models\NewsletterSubscription;
use App\Models\SentNewsletter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class NewsletterController extends Controller
{
  public function index()
  {
    $sentNewsletters = SentNewsletter::latest()->get();
    return Inertia::render('dashboard/Newsletter', [
      'sentNewsletters' => $sentNewsletters,
    ]);
  }

  public function send(Request $request)
  {
    $request->validate([
      'subject' => 'required|string|max:255',
      'content' => 'required|string',
    ]);

    $subscribers = NewsletterSubscription::all();
    $recipientsCount = $subscribers->count();

    foreach ($subscribers as $subscriber) {
      Mail::to($subscriber->email)->send(new NewsletterEmail(
        $request->subject,
        [
          'title' => $request->subject,
          'body' => $request->content,
          'url' => config('app.url'), // You might want a specific URL here
          'buttonText' => 'Visit Website'
        ]
      ));
    }

    SentNewsletter::create([
      'subject' => $request->subject,
      'content' => $request->content,
      'recipients_count' => $recipientsCount,
    ]);

    return redirect()->back()->with('success', 'Newsletter sent successfully and queued for delivery!');
  }
}
