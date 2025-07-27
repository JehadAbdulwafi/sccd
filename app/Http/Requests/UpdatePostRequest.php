<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePostRequest extends FormRequest
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
      'desc' => ['nullable', 'string', 'max:255'],
      'content' => ['required', 'string'],
    ];
    $rules['image'] = ['nullable', 'string'];

    // if ($this->hasFile('image')) {
    //   $rules['image'] = ['nullable', 'image', 'max:2048'];
    // } else {
    //   $rules['image'] = ['nullable', 'string'];
    // }

    return $rules;
  }
}
