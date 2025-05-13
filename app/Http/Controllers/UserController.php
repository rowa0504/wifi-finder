<?php

namespace App\Http\Controllers;

use Symfony\Component\HttpFoundation\BinaryFileResponse;
use App\Models\User;

class UserController extends Controller
{
    public function showAvatar(User $user): BinaryFileResponse
    {
        $avatar = $user->getFirstMedia('avatar');

        if (!$avatar) {
            abort(404);
        }

        return response()->file($avatar->getPath(), [
            'Content-Type' => $avatar->mime_type,
            'Content-Disposition' => 'inline; filename="' . $avatar->file_name . '"',
        ]);
    }
}
