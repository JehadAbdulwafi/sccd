<?php

namespace Database\Seeders;

use App\Models\SiteContent;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SiteContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SiteContent::create([
            'slug' => 'terms',
            'title' => 'Terms of Use',
            'content' => '<h1>Terms of Use</h1><p>Please read these terms of use carefully before using this website.</p>'
        ]);

        SiteContent::create([
            'slug' => 'policies',
            'title' => 'Privacy Policy',
            'content' => '<h1>Privacy Policy</h1><p>Your privacy is important to us.</p>'
        ]);
    }
}