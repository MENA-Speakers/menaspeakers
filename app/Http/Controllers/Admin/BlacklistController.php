
<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blacklist;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlacklistController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Blacklist/Index', [
            'blacklist' => Blacklist::latest()->paginate(10)
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:blacklists',
            'reason' => 'required|string'
        ]);

        Blacklist::create($validated);

        return redirect()->back()->with('success', 'Email blacklisted successfully');
    }

    public function check(Request $request)
    {
        $exists = Blacklist::where('email', $request->email)->exists();
        return response()->json(['blacklisted' => $exists]);
    }
}
