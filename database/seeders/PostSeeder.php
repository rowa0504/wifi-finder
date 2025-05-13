<?php

namespace Database\Seeders;

// database/seeders/PostSeeder.php

use Illuminate\Database\Seeder;
use App\Models\Post;

class PostSeeder extends Seeder
{
    public function run(): void
    {
        Post::create([
            'user_id' => 2,
            'category_id' => 1,
            'place' => 'Bo’s Coffee Cebu',
            'wifi_name' => 'BO_WIFI',
            'location' => 'https://maps.google.com/?q=Bo%27s+Coffee+Cebu',
            'latitude' => 10.3157,
            'longitude' => 123.8854,
            'speed' => 20,
            'image' => 'bos_coffee.jpg',
            'description' => 'Free Wi-Fi with purchase. Comfortable seating.',
        ]);
        Post::create([
            'user_id' => 2,
            'category_id' => 1,
            'place' => 'Starbucks Cebu',
            'wifi_name' => 'STARBUCKS_WIFI',
            'location' => 'https://maps.google.com/?q=Starbucks+Cebu',
            'latitude' => 10.3157,
            'longitude' => 123.8854,
            'speed' => 15,
            'image' => 'starbucks_cebu.jpg',
            'description' => 'Free Wi-Fi with purchase. Cozy atmosphere.',
        ]);
        Post::create([
            'user_id' => 2,
            'category_id' => 1,
            'place' => 'Cafe Laguna',
            'wifi_name' => 'LAGUNA_WIFI',
            'location' => 'https://maps.google.com/?q=Cafe+Laguna',
            'latitude' => 10.3157,
            'longitude' => 123.8854,
            'speed' => 25,
            'image' => 'cafe_laguna.jpg',
            'description' => 'Free Wi-Fi with purchase. Great ambiance.',
        ]);
        Post::create([
            'user_id' => 2,
            'category_id' => 1,
            'place' => 'The Coffee Bean & Tea Leaf',
            'wifi_name' => 'CBTL_WIFI',
            'location' => 'https://maps.google.com/?q=The+Coffee+Bean+%26+Tea+Leaf',
            'latitude' => 10.3157,
            'longitude' => 123.8854,
            'speed' => 30,
            'image' => 'cbtl.jpg',
            'description' => 'Free Wi-Fi with purchase. Relaxing environment.',
        ]);
        Post::create([
            'user_id' => 2,
            'category_id' => 3,
            'place' => 'Dunkin Donuts',
            'wifi_name' => 'DUNKIN_WIFI',
            'location' => 'https://maps.google.com/?q=Dunkin+Donuts',
            'latitude' => 10.3157,
            'longitude' => 123.8854,
            'speed' => 10,
            'image' => 'dunkin_donuts.jpg',
            'description' => 'Free Wi-Fi with purchase. Quick service.',
        ]);
        Post::create([
            'user_id' => 2,
            'category_id' => 3,
            'place' => 'McDonald\'s',
            'wifi_name' => 'MCDO_WIFI',
            'location' => 'https://maps.google.com/?q=McDonald%27s',
            'latitude' => 10.3157,
            'longitude' => 123.8854,
            'speed' => 5,
            'image' => 'mcdonalds.jpg',
            'description' => 'Free Wi-Fi with purchase. Fast food.',
        ]);
        Post::create([
            'user_id' => 2,
            'category_id' => 3,
            'place' => 'Jollibee',
            'wifi_name' => 'JOLLIBEE_WIFI',
            'location' => 'https://maps.google.com/?q=Jollibee',
            'latitude' => 10.3157,
            'longitude' => 123.8854,
            'speed' => 8,
            'image' => 'jollibee.jpg',
            'description' => 'Free Wi-Fi with purchase. Family-friendly.',
        ]);
        Post::create([
            'user_id' => 2,
            'category_id' => 3,
            'place' => 'KFC',
            'wifi_name' => 'KFC_WIFI',
            'location' => 'https://maps.google.com/?q=KFC',
            'latitude' => 10.3157,
            'longitude' => 123.8854,
            'speed' => 12,
            'image' => 'kfc.jpg',
            'description' => 'Free Wi-Fi with purchase. Fast food.',
        ]);
        Post::create([
            'user_id' => 2,
            'category_id' => 4,
            'place' => 'Ayala Center Cebu',
            'wifi_name' => 'AYALA_WIFI',
            'location' => 'https://maps.google.com/?q=Ayala+Center+Cebu',
            'latitude' => 10.3157,
            'longitude' => 123.8854,
            'speed' => 40,
            'image' => 'ayala_center_cebu.jpg',
            'description' => 'Free Wi-Fi in the mall. Shopping and dining.',
        ]);
        Post::create([
            'user_id' => 2,
            'category_id' => 4,
            'place' => 'SM City Cebu',
            'wifi_name' => 'SM_WIFI',
            'location' => 'https://maps.google.com/?q=SM+City+Cebu',
            'latitude' => 10.3157,
            'longitude' => 123.8854,
            'speed' => 35,
            'image' => 'sm_city_cebu.jpg',
            'description' => 'Free Wi-Fi in the mall. Shopping and dining.',
        ]);
        Post::create([
            'user_id' => 2,
            'category_id' => 4,
            'place' => 'Robinsons Galleria Cebu',
            'wifi_name' => 'ROBINSONS_WIFI',
            'location' => 'https://maps.google.com/?q=Robinsons+Galleria+Cebu',
            'latitude' => 10.3157,
            'longitude' => 123.8854,
            'speed' => 50,
            'image' => 'robinsons_galleria_cebu.jpg',
            'description' => 'Free Wi-Fi in the mall. Shopping and dining.',
        ]);
        Post::create([
            'user_id' => 2,
            'category_id' => 4,
            'place' => 'SM Seaside City Cebu',
            'wifi_name' => 'SM_SEASIDE_WIFI',
            'location' => 'https://maps.google.com/?q=SM+Seaside+City+Cebu',
            'latitude' => 10.3157,
            'longitude' => 123.8854,
            'speed' => 45,
            'image' => 'sm_seaside_city_cebu.jpg',
            'description' => 'Free Wi-Fi in the mall. Shopping and dining.',
        ]);
        Post::create([
            'user_id' => 2,
            'category_id' => 5,
            'place' => 'Radisson Blu Cebu',
            'wifi_name' => 'RADISSON_WIFI',
            'location' => 'https://maps.google.com/?q=Radisson+Blu+Cebu',
            'latitude' => 10.3157,
            'longitude' => 123.8854,
            'speed' => 60,
            'image' => 'radisson_blu_cebu.jpg',
            'description' => 'Free Wi-Fi for guests. Luxury hotel.',
        ]);
        Post::create([
            'user_id' => 2,
            'category_id' => 5,
            'place' => 'Shangri-La Mactan Resort and Spa',
            'wifi_name' => 'SHANGRILA_WIFI',
            'location' => 'https://maps.google.com/?q=Shangri-La+Mactan+Resort+and+Spa',
            'latitude' => 10.3157,
            'longitude' => 123.8854,
            'speed' => 70,
            'image' => 'shangrila_mactan.jpg',
            'description' => 'Free Wi-Fi for guests. Luxury resort.',
        ]);
        Post::create([
            'user_id' => 2,
            'category_id' => 5,
            'place' => 'Marco Polo Plaza Cebu',
            'wifi_name' => 'MARCO_POLO_WIFI',
            'location' => 'https://maps.google.com/?q=Marco+Polo+Plaza+Cebu',
            'latitude' => 10.3157,
            'longitude' => 123.8854,
            'speed' => 55,
            'image' => 'marco_polo_plaza_cebu.jpg',
            'description' => 'Free Wi-Fi for guests. Luxury hotel.',
        ]);
        Post::create([
            'user_id' => 2,
            'category_id' => 5,
            'place' => 'Waterfront Cebu City Hotel and Casino',
            'wifi_name' => 'WATERFRONT_WIFI',
            'location' => 'https://maps.google.com/?q=Waterfront+Cebu+City+Hotel+and+Casino',
            'latitude' => 10.3157,
            'longitude' => 123.8854,
            'speed' => 65,
            'image' => 'waterfront_cebu.jpg',
            'description' => 'Free Wi-Fi for guests. Luxury hotel.',
        ]);
        Post::create([
            'user_id' => 2,
            'category_id' => 6,
            'place' => 'Mactan-Cebu International Airport',
            'wifi_name' => 'MCIA_WIFI',
            'location' => 'https://maps.google.com/?q=Mactan-Cebu+International+Airport',
            'latitude' => 10.3157,
            'longitude' => 123.8854,
            'speed' => 80,
            'image' => 'mactan_cebu_airport.jpg',
            'description' => 'Free Wi-Fi in the airport. Travel hub.',
        ]);
        Post::create([
            'user_id' => 2,
            'category_id' => 6,
            'place' => 'Cebu North Bus Terminal',
            'wifi_name' => 'CNBT_WIFI',
            'location' => 'https://maps.google.com/?q=Cebu+North+Bus+Terminal',
            'latitude' => 10.3157,
            'longitude' => 123.8854,
            'speed' => 25,
            'image' => 'cebu_north_bus_terminal.jpg',
            'description' => 'Free Wi-Fi in the bus terminal. Travel hub.',
        ]);
        Post::create([
            'user_id' => 2,
            'category_id' => 6,
            'place' => 'Cebu South Bus Terminal',
            'wifi_name' => 'CSBT_WIFI',
            'location' => 'https://maps.google.com/?q=Cebu+South+Bus+Terminal',
            'latitude' => 10.3157,
            'longitude' => 123.8854,
            'speed' => 30,
            'image' => 'cebu_south_bus_terminal.jpg',
            'description' => 'Free Wi-Fi in the bus terminal. Travel hub.',
        ]);
        Post::create([
            'user_id' => 2,
            'category_id' => 6,
            'place' => 'Cebu City Pier',
            'wifi_name' => 'CCP_WIFI',
            'location' => 'https://maps.google.com/?q=Cebu+City+Pier',
            'latitude' => 10.3157,
            'longitude' => 123.8854,
            'speed' => 20,
            'image' => 'cebu_city_pier.jpg',
            'description' => 'Free Wi-Fi in the pier. Travel hub.',
        ]);
        Post::create([
            'user_id' => 2,
            'category_id' => 7,
            'place' => 'Ayala Center Cebu',
            'wifi_name' => 'AYALA_WIFI',
            'location' => 'https://maps.google.com/?q=Ayala+Center+Cebu',
            'latitude' => 10.3157,
            'longitude' => 123.8854,
            'speed' => 40,
            'image' => 'ayala_center_cebu.jpg',
            'description' => 'Free Wi-Fi in the mall. Shopping and dining.',
        ]);
        Post::create([
            'user_id' => 2,
            'category_id' => 7,
            'place' => 'SM City Cebu',
            'wifi_name' => 'SM_WIFI',
            'location' => 'https://maps.google.com/?q=SM+City+Cebu',
            'latitude' => 10.3157,
            'longitude' => 123.8854,
            'speed' => 35,
            'image' => 'sm_city_cebu.jpg',
            'description' => 'Free Wi-Fi in the mall. Shopping and dining.',
        ]);
        Post::create([
            'user_id' => 2,
            'category_id' => 7,
            'place' => 'Robinsons Galleria Cebu',
            'wifi_name' => 'ROBINSONS_WIFI',
            'location' => 'https://maps.google.com/?q=Robinsons+Galleria+Cebu',
            'latitude' => 10.3157,
            'longitude' => 123.8854,
            'speed' => 50,
            'image' => 'robinsons_galleria_cebu.jpg',
            'description' => 'Free Wi-Fi in the mall. Shopping and dining.',
        ]);
        Post::create([
            'user_id' => 2,
            'category_id' => 7,
            'place' => 'SM Seaside City Cebu',
            'wifi_name' => 'SM_SEASIDE_WIFI',
            'location' => 'https://maps.google.com/?q=SM+Seaside+City+Cebu',
            'latitude' => 10.3157,
            'longitude' => 123.8854,
            'speed' => 45,
            'image' => 'sm_seaside_city_cebu.jpg',
            'description' => 'Free Wi-Fi in the mall. Shopping and dining.',
        ]);
        Post::create([
            'user_id' => 2,
            'category_id' => 8,
            'place' => 'Co-working Space Cebu',
            'wifi_name' => 'COWORKING_WIFI',
            'location' => 'https://maps.google.com/?q=Co-working+Space+Cebu',
            'latitude' => 10.3157,
            'longitude' => 123.8854,
            'speed' => 100,
            'image' => 'coworking_space_cebu.jpg',
            'description' => 'Free Wi-Fi for members. Productive environment.',
        ]);
        Post::create([
            'user_id' => 2,
            'category_id' => 8,
            'place' => 'The Company Cebu',
            'wifi_name' => 'THE_COMPANY_WIFI',
            'location' => 'https://maps.google.com/?q=The+Company+Cebu',
            'latitude' => 10.3157,
            'longitude' => 123.8854,
            'speed' => 90,
            'image' => 'the_company_cebu.jpg',
            'description' => 'Free Wi-Fi for members. Productive environment.',
        ]);
        Post::create([
            'user_id' => 2,
            'category_id' => 8,
            'place' => 'Hive Cebu',
            'wifi_name' => 'HIVE_WIFI',
            'location' => 'https://maps.google.com/?q=Hive+Cebu',
            'latitude' => 10.3157,
            'longitude' => 123.8854,
            'speed' => 110,
            'image' => 'hive_cebu.jpg',
            'description' => 'Free Wi-Fi for members. Productive environment.',
        ]);
    }
}
