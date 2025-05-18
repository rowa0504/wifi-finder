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
            'name' => 'Alice White',
            'email' => 'user@example.com',
            'workos_id' => 'workos_user_001',
            'avatar' => 'https://example.com/avatar2.jpg',
        ]);
        User::create([
            'name' => 'Bob Smith',
            'email' => 'bob.smith@example.com',
            'workos_id' => 'workos_user_002',
            'avatar' => 'https://example.com/avatar3.jpg',
        ]);

        User::create([
            'name' => 'Carol Johnson',
            'email' => 'carol.johnson@example.com',
            'workos_id' => 'workos_user_003',
            'avatar' => 'https://example.com/avatar4.jpg',
        ]);

        User::create([
            'name' => 'David Lee',
            'email' => 'david.lee@example.com',
            'workos_id' => 'workos_user_004',
            'avatar' => 'https://example.com/avatar5.jpg',
        ]);

        User::create([
            'name' => 'Eva Brown',
            'email' => 'eva.brown@example.com',
            'workos_id' => 'workos_user_005',
            'avatar' => 'https://example.com/avatar6.jpg',
        ]);

        User::create([
            'name' => 'Frank Miller',
            'email' => 'frank.miller@example.com',
            'workos_id' => 'workos_user_006',
            'avatar' => 'https://example.com/avatar7.jpg',
        ]);

        User::create([
            'name' => 'Grace Wilson',
            'email' => 'grace.wilson@example.com',
            'workos_id' => 'workos_user_007',
            'avatar' => 'https://example.com/avatar8.jpg',
        ]);

        User::create([
            'name' => 'Henry Clark',
            'email' => 'henry.clark@example.com',
            'workos_id' => 'workos_user_008',
            'avatar' => 'https://example.com/avatar9.jpg',
        ]);

        User::create([
            'name' => 'Ivy Martinez',
            'email' => 'ivy.martinez@example.com',
            'workos_id' => 'workos_user_009',
            'avatar' => 'https://example.com/avatar10.jpg',
        ]);

        User::create([
            'name' => 'Jack Turner',
            'email' => 'jack.turner@example.com',
            'workos_id' => 'workos_user_010',
            'avatar' => 'https://example.com/avatar11.jpg',
        ]);
    }
}
