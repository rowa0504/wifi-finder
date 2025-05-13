<?php

namespace App\Http\Controllers;

// app/Http/Controllers/ContactController.php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('contact/form');
    }

    public function submit(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'message' => 'required|string',
        ]);

        // メール送信（本番ではMailableクラスを使用することを推奨）
        Mail::raw($validated['message'], function ($message) use ($validated) {
            $message->to('admin@example.com')
                    ->subject('Contact from ' . $validated['name'])
                    ->replyTo($validated['email']);
        });

        return redirect()->route('contact.index')->with('success', 'Your message has been sent.');
    }
}
