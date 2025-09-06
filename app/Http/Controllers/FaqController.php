<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FaqController extends Controller
{
    public function index()
    {
        $faqs = Faq::orderBy('order')->get();
        return Inertia::render('faq', ['faqs' => $faqs]);
    }

    public function dashboardIndex()
    {
        $faqs = Faq::orderBy('order')->get();
        return Inertia::render('dashboard/faq/list', ['faqs' => $faqs]);
    }

    public function create()
    {
        return Inertia::render('dashboard/faq/create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'question' => ['required', 'string', 'max:255'],
            'answer' => ['required', 'string'],
            'order' => ['nullable', 'integer'],
        ]);

        Faq::create($data);

        return redirect()->route('dashboard.faqs.index');
    }

    public function edit(Faq $faq)
    {
        return Inertia::render('dashboard/faq/edit', ['faq' => $faq]);
    }

    public function update(Request $request, Faq $faq)
    {
        $data = $request->validate([
            'question' => ['required', 'string', 'max:255'],
            'answer' => ['required', 'string'],
            'order' => ['nullable', 'integer'],
        ]);

        $faq->update($data);

        return redirect()->route('dashboard.faqs.index');
    }

    public function destroy(Faq $faq)
    {
        $faq->delete();

        return back();
    }
}