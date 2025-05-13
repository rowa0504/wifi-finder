<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name' => 'John Admin',
            'email' => 'admin@example.com',
            'workos_id' => 'workos_admin_001',
            'avatar' => 'https://example.com/avatar1.jpg',
        ]);

        User::create([
            'name' => 'Alice User',
            'email' => 'user@example.com',
            'workos_id' => 'workos_user_001',
            'avatar' => 'https://example.com/avatar2.jpg',
        ]);
    }
}
