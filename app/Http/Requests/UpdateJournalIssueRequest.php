<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateJournalIssueRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   */
  public function authorize(): bool
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
   */
  public function rules(): array
  {
    $rules = [
      'title' => ['required', 'string', 'max:255'],
      'description' => ['nullable', 'string'],
      'published_at' => ['string'],
    ];

    $rules['cover_image'] = ['nullable', 'string'];
    // if ($this->hasFile('cover_image')) {
    //   $rules['cover_image'] = ['nullable', 'image', 'max:2048'];
    // } else {
    //   $rules['cover_image'] = ['nullable', 'string'];
    // }

    return $rules;
  }
}
