<?php

use App\Models\User;

test('profile page is displayed', function () {
    $user = User::factory()->create();

    $response = $this
        ->actingAs($user)
        ->get('/settings/profile');

    $response->assertOk();
});

test('profile information can be updated', function () {
    $user = User::factory()->create();

    $response = $this
        ->actingAs($user)
        ->patch('/settings/profile', [
            'name' => 'Updated Name',
        ]);

    $response
        ->assertSessionHasNoErrors()
        ->assertRedirect('/settings/profile');

    $user->refresh();

    expect($user->name)->toBe('Updated Name');
});

test('user can delete their account', function () {
    $user = User::factory()->create();

    $response = $this
        ->actingAs($user)
        ->delete('/settings/profile', [
            'password' => 'password',  // ユーザーのパスワード
        ]);

    $response
        ->assertSessionHasNoErrors()
        ->assertRedirect('/');

    // ログアウト処理を追加
    $this->assertGuest();  // ユーザーがログアウトされてゲスト状態か確認

    // ユーザーが削除されたことを確認
    expect($user->fresh())->toBeNull();  // fresh() でユーザーが削除されているか確認
});
