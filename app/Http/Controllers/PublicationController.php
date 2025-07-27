<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePublicationRequest;
use App\Http\Requests\UpdatePublicationRequest;
use App\Models\Publication;
use Inertia\Inertia;
use Illuminate\Http\Request;

class PublicationController extends Controller
{
  public function index()
  {
    $publications = Publication::get();
    return Inertia::render('dashboard/publications/list', [
      'publications' => $publications
    ]);
  }

  public function create()
  {
    return Inertia::render('dashboard/publications/create');
  }

  public function edit(Publication $publication)
  {
    return Inertia::render('dashboard/publications/edit', [
      'publication' => $publication,
    ]);
  }

  public function store(StorePublicationRequest $request)
  {
    $data = $request->validated();

    // if ($request->hasFile('image')) {
    //   $path = $request->file('image')->store('publications', 'public');
    //   $data['image'] = asset('storage/' . $path);
    // }
    //
    // if ($request->hasFile('file')) {
    //   $path = $request->file('file')->store('publications', 'public');
    //   $data['file'] = asset('storage/' . $path);
    // }

    Publication::create($data);

    return to_route("dashboard.publications.list");
  }

  public function show(Publication $publication)
  {
    return Inertia::render('dashboard/publications/details', [
      'publication' => $publication
    ]);
  }


  public function update(UpdatePublicationRequest $request, Publication $publication)
  {
    $data = $request->validated();

    // if ($request->hasFile('image')) {
    //   $path = $request->file('image')->store('publications', 'public');
    //   $data['image'] = asset('storage/' . $path);
    // } else if (empty($data['image'])) {
    //   $data['image'] = $publication->image;
    // }
    //
    // if ($request->hasFile('file')) {
    //   $path = $request->file('file')->store('publications', 'public');
    //   $data['file'] = asset('storage/' . $path);
    // } else if (empty($data['file'])) {
    //   $data['file'] = $publication->file;
    // }

    $publication->update($data);

    return to_route("dashboard.publications.list");
  }

  public function destroy(Publication $publication)
  {
    $publication->delete();

    return to_route("dashboard.publications.list");
  }

  public function bulkActions(Request $request)
  {
    $action = $request->input('action');
    $entries = $request->input('entries');

    switch ($action) {
      case 'delete_selected':
        Publication::whereIn('id', $entries)->delete();
        return to_route("dashboard.publications.list");
      default:
        return to_route("dashboard.publications.list");
    }
  }
}
