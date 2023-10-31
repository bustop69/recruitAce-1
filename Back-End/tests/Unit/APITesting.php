<?php

namespace Tests\Unit;

use App\Models\Jobs;
use Tests\TestCase;

class UsetEST extends TestCase
{


    // Test whether the we can succesfuly connect to the database 
    public function test_database_connection()
    {
        $response = $this->get("api/jobs");

        $response->assertStatus(200);
    }

    public function post_data()
    {
        $job1 = [
            'title' => 'software engineer',
            'description' => 'Cool job!',
            'salary' => 20000,
            'company' => 'google'
        ];

        $response = $this->post("ap/jobs", $job1);

        $response->assertStatus(200);
    }
}
