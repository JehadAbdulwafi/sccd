<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePublicationRequest extends FormRequest
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
      'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
      'authors' => ['sometimes', 'json'],
      'title' => 'required|string|max:255',
      'description' => 'nullable|string',
      'published_at' => 'nullable|date',
      'tag' => 'nullable|string',
    ];

    if ($this->hasFile('image')) {
      $rules['image'] = ['nullable', 'image', 'mimes:jpeg,png,jpg,gif,svg|max:2048'];
    } else {
      $rules['image'] = ['nullable', 'string'];
    }

    if ($this->hasFile('file')) {
      $rules['file'] = ['nullable', 'file', 'mimes:pdf,doc,docx,txt,xls,xlsx,ppt,pptx'];
    } else {
      $rules['file'] = ['nullable', 'string'];
    }


    return $rules;
  }
}
