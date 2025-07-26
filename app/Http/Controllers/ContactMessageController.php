<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactMessageRequest;
use App\Models\ContactMessage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactMessageController extends Controller
{
    public function index()
    {
        $contactMessages = ContactMessage::all();
        return Inertia::render('dashboard/messages/list', [
            'contactMessages' => $contactMessages
        ]);
    }

    public function show(ContactMessage $contactMessage)
    {
        return Inertia::render('dashboard/messages/message-details', [
            'contactMessage' => $contactMessage
        ]);
    }

    public function store(StoreContactMessageRequest $request)
    {
        ContactMessage::create($request->validated());

        return to_route("dashboard.messages.list");
    }

    public function destroy(ContactMessage $contactMessage)
    {
        $contactMessage->delete();

        return to_route("dashboard.messages.list");
    }

    public function bulkActions(Request $request)
    {
        $request->validate([
            'action' => 'required|string',
            'entries' => 'required|array',
            'entries.*' => 'integer|exists:contact_messages,id',
        ]);

        if ($request->input('action') === 'delete_selected') {
            ContactMessage::whereIn('id', $request->input('entries'))->delete();
        }

        return to_route("dashboard.messages.list");
    }
}
