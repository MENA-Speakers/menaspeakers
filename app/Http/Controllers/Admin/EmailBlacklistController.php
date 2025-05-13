<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\EmailBlacklist;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EmailBlacklistController extends Controller
{
    public function index()
    {
        $blacklist = EmailBlacklist::orderBy('created_at', 'desc')->paginate(10);

        return Inertia::render('Admin/EmailBlacklist/Index', [
            'blacklist' => $blacklist
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:email_blacklist,email',
            'name' => 'nullable|string|max:255',
            'reason' => 'nullable|string'
        ]);

        EmailBlacklist::create([
            'name' => $request->name,
            'email' => $request->email,
            'reason' => $request->reason
        ]);

        return redirect()->back()->with('success', 'Email added to blacklist successfully');
    }

    public function destroy($id)
    {
        $blacklist = EmailBlacklist::findOrFail($id);
        $blacklist->delete();

        return response()->json(['success' => true]);
    }

    public function check(Request $request)
    {
        $request->validate([
            'email' => 'required|email'
        ]);

        $isBlacklisted = EmailBlacklist::isBlacklisted($request->email);

        return response()->json([
            'blacklisted' => $isBlacklisted
        ]);
    }
}
