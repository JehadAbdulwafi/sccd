<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateJournalArticleRequest extends FormRequest
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
      'journal_issue_id' => ['sometimes', 'exists:journal_issues,id'],
      'title' => ['required', 'string', 'max:255'],
      'authors' => ['sometimes', 'json'],
      'tag' => ['nullable', 'string'],
      'file_path' => ['nullable', 'string'],
    ];

    // if ($this->hasFile('file_path')) {
    //   $rules['file_path'] = ['nullable', 'file', 'mimes:pdf,doc,docx,txt,xls,xlsx,ppt,pptx'];
    // } else {
    //   $rules['file_path'] = ['nullable', 'string'];
    // }

    return $rules;
  }
}
