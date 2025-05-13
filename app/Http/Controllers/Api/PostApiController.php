<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;

class PostApiController extends Controller
{
    public function index(Request $request)
    {
        // クエリパラメータに基づいて投稿を取得
        $query = Post::query();

        if ($request->has('search') && $request->search) {
            $query->where('place', 'like', '%' . $request->search . '%')
                  ->orWhere('wifi_name', 'like', '%' . $request->search . '%')
                  ->orWhere('description', 'like', '%' . $request->search . '%');
        }

        if ($request->has('category_id') && $request->category_id) {
            $query->where('category_id', $request->category_id);
        }

        $posts = $query->get();

        return response()->json($posts);
    }

    public function MyPosts(Request $request)
    {
        // 認証ユーザーの投稿を取得
        $user = $request->user();
        $posts = $user->posts()->get();

        return response()->json($posts);
    }
}
