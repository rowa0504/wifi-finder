<?php

namespace Database\Seeders;

// database/seeders/CategorySeeder.php

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
    $categories = [
        ['id' => 1, 'name' => 'Cafe'],
        ['id' => 2, 'name' => 'Library'],
        ['id' => 3, 'name' => 'Restaurant'],
        ['id' => 4, 'name' => 'Park'],
        ['id' => 5, 'name' => 'Hotel'],
        ['id' => 6, 'name' => 'Airport'],
        ['id' => 7, 'name' => 'Shopping Mall'],
        ['id' => 8, 'name' => 'Co-working Space'],
        ['id' => 9, 'name' => 'Public Transport'],
        ['id' => 10, 'name' => 'Other'], // その他のカテゴリ
    ];

    foreach ($categories as $category) {
        Category::create(['name' => $category['name']]);
    }
    }
}
