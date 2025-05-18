<?php

use App\Models\User;
test('env variables are loaded correctly', function () {
    dd(env('DB_CONNECTION'), env('DB_DATABASE'));
});

test('guests are redirected to the login page', function () {
    $this->get('/dashboard')->assertRedirect('/login');
});

test('authenticated users are redirected to posts page', function () {
    $this->actingAs($user = User::factory()->create());

    $this->get('/dashboard')->assertRedirect('/posts');
});

//
