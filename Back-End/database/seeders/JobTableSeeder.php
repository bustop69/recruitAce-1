<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JobTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('jobs')->insert([
            'title' => 'software engineer',
            'description' => 'Cool job!',
            'salary' => 20000,
            'company' => 'google'
        ]);
    }

    public function test_database()
    {
        $this->assertDatabaseHas('users', [
            'title' => 'software engineer'
        ]);
    }
}
