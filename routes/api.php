<?php
// routes/api.php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PostApiController;


Route::get('/posts', [PostApiController::class, 'index']);
Route::get('/my-posts', [PostApiController::class, 'MyPosts'])->name('my-posts');
