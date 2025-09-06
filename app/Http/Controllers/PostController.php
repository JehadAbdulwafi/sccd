<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Http\Request;

class PostController extends Controller
{
  public function index()
  {
    $posts = Post::get();
    return Inertia::render('dashboard/posts/list', [
      'posts' => $posts
    ]);
  }

  public function create()
  {
    return Inertia::render('dashboard/posts/create');
  }

  public function edit(Post $post)
  {
    return Inertia::render('dashboard/posts/edit', [
      'post' => $post,
    ]);
  }

  public function store(StorePostRequest $request)
  {
    $data = $request->validated();

    \Illuminate\Support\Facades\Log::info('Creating post with data:', $data);

    Post::create($data);

    return to_route("dashboard.posts.list");
  }

  public function show(Post $post)
  {
    return Inertia::render('dashboard/posts/details', [
      'post' => $post
    ]);
  }


  public function update(UpdatePostRequest $request, Post $post)
  {
    $data = $request->validated();

    // Explicitly handle the 'image' field
    if ($request->has('image')) { // Check if 'image' key exists in the request
        $data['image'] = $request->input('image'); // Assign the value (which can be null or a URL)
    } else {
        // If 'image' key is not present in the request, it means no change was intended for the image.
        // In this case, we should retain the existing image.
        $data['image'] = $post->image;
    }

    $post->update($data);

    return to_route("dashboard.posts.list");
  }

  public function destroy(Post $post)
  {
    $post->delete();

    return to_route("dashboard.posts.list");
  }

  public function bulkActions(Request $request)
  {
    $action = $request->input('action');
    $entries = $request->input('entries');

    switch ($action) {
      case 'delete_selected':
        Post::whereIn('id', $entries)->delete();
        return to_route("dashboard.posts.list");
      default:
        return to_route("dashboard.posts.list");
    }
  }
}

