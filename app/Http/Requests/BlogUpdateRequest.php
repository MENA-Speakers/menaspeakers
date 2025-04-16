<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BlogUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'title'    => 'required|string|max:255',
            'content'  => 'required|string',
            'excerpt'  => 'nullable|string',
            'featured' => 'boolean',
            'authorId' => 'required|exists:speakers,id', // Add validation for authorId
            'categories' => 'nullable|array',
            'categories.*.value' => 'exists:categories,id',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ];
    }
}
