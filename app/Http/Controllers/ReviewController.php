<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Review;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;


class ReviewController extends Controller
{

    public function create(Post $post)
    {
        return Inertia::render('posts/reviews/create', [
            'post' => $post,
        ]);
    }
    // app/Http/Controllers/ReviewController.php
    public function store(Request $request, Post $post)
    {
        $validated = $request->validate([
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'required|string|max:1000',
        ]);

        $post->reviews()->create([
            'user_id' => (Auth::user())->id,
            'rating' => $validated['rating'],
            'comment' => $validated['comment'],
        ]);

        return redirect()->route('posts.index', $post)
            ->with('success', 'Review submitted successfully!');
    }

    public function MyReviews()
    {
        $reviews = Review::with('post')->where('user_id', Auth::id())
            ->latest()
            ->paginate(5); // ← ページごとに5件表示

        return Inertia::render('posts/reviews/index', [
            'reviews' => $reviews,
        ]);
    }
}
