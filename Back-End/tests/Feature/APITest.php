<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class APITest extends TestCase
{

    /** @test */
    public function access_jobs(): void
    {
        $response = $this->get('http://127.0.0.1:8000/api/jobs');

        $response->assertStatus(200);
    }

    /** @test */
    public function create_new_job()
    {
        $data = [
            'title' => 'Software Engineer',
            'description' => 'Bring enthusiasm to the team!',
            'company' => 'Google',
            'salary' => 80000,
        ];

        $this->withoutMiddleware();

        $response = $this->post('http://127.0.0.1:8000/api/jobs', $data);

        $response->assertStatus(200);

        $this->assertDatabaseHas('jobs', $data);
    }

    /** @test */
    public function fetch_specific_job(): void
    {
        $response = $this->get('http://127.0.0.1:8000/api/jobs/1');

        $response->assertStatus(200);
    }

    /** @test */
    public function update_job()
    {
        $data = [
            'title' => 'Junior Software Engineer',
            'description' => 'Training provided',
            'company' => 'Google',
            'salary' => 25000,
        ];

        $this->withoutMiddleware();

        $response = $this->put('http://127.0.0.1:8000/api/jobs/1', $data);

        $response->assertStatus(200);

        $this->assertDatabaseHas('jobs', $data);
    }


    /** @test */
    public function delete_job(): void
    {
        $response = $this->delete('http://127.0.0.1:8000/api/jobs/1');

        $response->assertStatus(200);
    }
}
