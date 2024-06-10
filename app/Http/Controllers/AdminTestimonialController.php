<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminTestimonialController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Testimonials/Index', [
            'testimonials' => Testimonial::latest()->get()
        ]);
    }


    public function store(Request $request)
    {
        $request->validate([
            'content' => 'required',
            'author' => 'required',
        ]);

        $testimonial = Testimonial::create([
            'content' => $request->input('content'),
            'link' => $request->input('link'),
            'author' => $request->input('author'),
            'author_title' => $request->input('author_title'),
        ]);

        return $testimonial;
    }


    public function delete(Testimonial $testimonial)
    {
        $testimonial->delete();
        return redirect()->back();
    }

}
