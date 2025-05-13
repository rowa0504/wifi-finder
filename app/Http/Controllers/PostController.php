<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use App\Models\Category;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function index(Request $request)
    {
        $query = Post::with(['category', 'user', 'reviews']);

        if ($request->filled('category_id')) {
            $query->where('category_id', $request->category_id);
        }

        if ($request->filled('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('place', 'like', '%' . $request->search . '%')
                    ->orWhere('wifi_name', 'like', '%' . $request->search . '%');
            });
        }

        return inertia('posts/index', [
            'posts' => $query->paginate(5)->withQueryString(),
            'categories' => Category::all(),
            'filters' => $request->only(['category_id', 'search']),
        ]);
    }


    public function create()
    {
        return Inertia::render('posts/create');
    }

    public function store(Request $request)
    {
        // バリデーション
        $validated = $request->validate([
            'place' => 'required|string|max:255',
            'wifi_name' => 'required|string|max:255',
            'category_id' => 'required|integer',
            'location' => 'required|string', // ここは後でlatitudeとlongitudeに分ける
            'speed' => 'required|numeric',
            'description' => 'nullable|string',
        ]);

        // 位置情報を分ける
        $locationData = json_decode($validated['location'], true); // JSONをデコード
        $latitude = $locationData['latitude'];
        $longitude = $locationData['longitude'];

        // 新しい投稿をデータベースに保存
        try {
            $post = Post::create([
                'place' => $validated['place'],
                'wifi_name' => $validated['wifi_name'],
                'category_id' => $validated['category_id'],
                'location' => $validated['location'], // locationはそのまま保存
                'latitude' => $latitude,
                'longitude' => $longitude,
                'speed' => $validated['speed'],
                'description' => $validated['description'],
                'user_id' => optional(Auth::user())->id,
            ]);
        } catch (\Exception $e) {
            dd($e->getMessage()); // エラー内容を確認
        }

        // 投稿が正常に保存されたらレスポンスを返す
        return redirect()->route('posts.index')
            ->with('success', 'WiFiスポットの投稿が完了しました！');
    }

    public function myPosts()
    {
        $posts = Post::with(['category', 'user', 'reviews'])
            ->where('user_id', Auth::id())
            ->orderBy('created_at', 'desc')
            ->paginate(5); // 1ページに5件表示

        return Inertia::render('posts/my-posts', [
            'posts' => $posts,
        ]);
    }
}
