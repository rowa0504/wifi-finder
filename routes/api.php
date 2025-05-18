<?php
// routes/api.php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\Api\PostApiController;


Route::middleware('auth:sanctum')->group(function () {

    Route::get('/posts', [PostApiController::class, 'index']);
    Route::get('/my-posts', [PostApiController::class, 'myPosts'])->name('my-posts');
});
