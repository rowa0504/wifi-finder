<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\WorkOS\Http\Middleware\ValidateSessionWithWorkOS;
use App\Http\Controllers\WorkOS\OAuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return redirect()->route('login');
});

Route::middleware([
    'auth',
    ValidateSessionWithWorkOS::class,
])->group(function () {
    Route::get('dashboard', function () {
        return redirect()->route('posts.index'); // ← 投稿一覧にリダイレクト
    })->name('dashboard');


    // ✅ ここで PostController を使う
    Route::get('/posts', [PostController::class, 'index'])->name('posts.index');
    Route::get('/posts/create', [PostController::class, 'create'])->name('posts.create');
    Route::post('/posts', [PostController::class, 'store'])->name('posts.store');
    Route::get('/posts/{post}', [PostController::class, 'show'])->name('posts.show');
    Route::get('/posts/{post}/edit', [PostController::class, 'edit'])->name('posts.edit');

    // my posts
    Route::get('/my-posts', [PostController::class, 'myPosts'])->name('my-posts.index');

    // review
    Route::get('/posts/{post}/reviews/create', [ReviewController::class, 'create'])->name('reviews.create');
    Route::post('/posts/{post}/reviews', [ReviewController::class, 'store'])->name('reviews.store');
    Route::get('/my-reviews', [ReviewController::class, 'MyReviews'])->name('my-reviews.index');



    // contact
    Route::get('/contact', [ContactController::class, 'index'])->name('contact.index');
    Route::post('/contact', [ContactController::class, 'submit'])->name('contact.submit');


    // user
    Route::get('/users/{user}/avatar', [UserController::class, 'showAvatar'])->name('users.avatar.show');
});


require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
