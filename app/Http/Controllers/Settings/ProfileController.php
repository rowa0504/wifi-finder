<?php
namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Show the user's profile settings page.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('settings/profile', [
            'status' => $request->session()->get('status'),
        ]);
    }

    /**
     * Update the user's profile settings.
     */
    public function update(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
        ]);

        $request->user()->update(['name' => $request->name]);

        return to_route('profile.edit');
    }

    /**
     * Upload the user's avatar.
     */
    public function uploadAvatar(Request $request): RedirectResponse
    {
        $request->validate([
            'avatar' => ['required', 'image', 'mimes:jpg,jpeg,png,gif,svg', 'max:2048'],
        ]);

        $user = $request->user();

        // 画像のアップロード処理
        $media = $user->addMediaFromRequest('avatar')
            ->toMediaCollection('avatar');

        // アップロード後の画像URLを取得
        $avatarUrl = $user->getFirstMediaUrl('avatar');

        // ユーザーのavatarカラムにURLを保存
        $user->avatar = $avatarUrl;
        $user->save();

        // アバターアップロード後にプロフィール編集ページへリダイレクトし、ステータスをセッションに保存
        return redirect()->route('profile.edit')->with('status', 'Avatar updated successfully!');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->user()->delete();
        return redirect()->route('home');
    }
}
