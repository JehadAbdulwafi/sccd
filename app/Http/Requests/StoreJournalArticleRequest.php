<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreJournalArticleRequest extends FormRequest
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
      'journal_issue_id' => ['required', 'exists:journal_issues,id'],
      'title' => ['required', 'string', 'max:255'],
      'file_path' => ['required', 'file', 'mimes:pdf,doc,docx,txt,xls,xlsx,ppt,pptx'],
      'authors' => ['required', 'json'],
      'tag' => 'nullable|string',
    ];
  }
}
