<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePublicationRequest extends FormRequest
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
    return [
      // 'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
      // 'file' => 'nullable|file|mimes:pdf,doc,docx|max:10240',
      'image' => 'nullable|string',
      'file' => 'nullable|string',
      'authors' => ['sometimes', 'json'],
      'title' => 'required|string|max:255',
      'description' => 'nullable|string',
      'published_at' => 'nullable|date',
      'tag' => 'nullable|string',
    ];
  }
}
