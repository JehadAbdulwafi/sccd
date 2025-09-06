<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePartnerRequest;
use App\Http\Requests\UpdatePartnerRequest;
use App\Models\Partner;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PartnerController extends Controller
{
  public function index()
  {
    $partners = Partner::all();
    return Inertia::render('dashboard/partners/list', [
      'partners' => $partners
    ]);
  }

  public function create()
  {
    return Inertia::render('dashboard/partners/create');
  }

  public function edit(Partner $partner)
  {
    return Inertia::render('dashboard/partners/edit', [
      'partner' => $partner,
    ]);
  }

  public function store(StorePartnerRequest $request)
  {
    $data = $request->validated();

    if ($request->hasFile('logo')) {
      $path = $request->file('logo')->store('partners', 'public');
      $data['logo'] = asset('storage/' . $path);
    }

    Partner::create($data);

    return to_route("dashboard.partners.list");
  }

  public function update(UpdatePartnerRequest $request, Partner $partner)
  {
    $data = $request->validated();

    if ($request->hasFile('logo')) {
      $path = $request->file('logo')->store('partners', 'public');
      $data['logo'] = asset('storage/' . $path);
    } else if (empty($data['logo'])) {
      $data['logo'] = null;
    }

    $partner->update($data);

    return to_route("dashboard.partners.list");
  }

  public function destroy(Partner $partner)
  {
    $partner->delete();

    return to_route("dashboard.partners.list");
  }

  public function bulkActions(Request $request)
  {
    $request->validate([
      'action' => 'required|string',
      'entries' => 'required|array',
      'entries.*' => 'integer|exists:partners,id',
    ]);

    if ($request->input('action') === 'delete_selected') {
      Partner::whereIn('id', $request->input('entries'))->delete();
    }

    return to_route("dashboard.partners.list");
  }
}
