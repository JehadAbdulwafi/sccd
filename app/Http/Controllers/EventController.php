<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Http\Requests\StoreEventRequest;
use App\Http\Requests\UpdateEventRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;

class EventController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return Inertia::render('dashboard/events/list', [
      'events' => Event::all(),
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return Inertia::render('dashboard/events/create');
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(StoreEventRequest $request)
  {
    Event::create($request->validated());

    return redirect()->route('dashboard.events.list');
  }

  /**
   * Display the specified resource.
   */
  public function show(Event $event)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Event $event)
  {
    return Inertia::render('dashboard/events/edit', [
      'event' => $event,
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(UpdateEventRequest $request, Event $event)
  {
    $event->update($request->validated());

    return redirect()->route('dashboard.events.list');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Event $event)
  {
    $event->delete();

    return redirect()->route('dashboard.events.list');
  }

  public function bulkActions(Request $request)
  {
    $action = $request->input('action');
    $entries = $request->input('entries');

    switch ($action) {
      case 'delete_selected':
        Event::whereIn('id', $entries)->delete();
        return to_route("dashboard.events.list");
      default:
        return to_route("dashboard.events.list");
    }
  }
}
