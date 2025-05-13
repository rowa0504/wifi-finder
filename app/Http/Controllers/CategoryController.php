<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        // カテゴリーの取得
        $categories = \App\Models\Category::all();

        return response()->json($categories);
    }
}
