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

        $response->assertStatus(201);
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

        $response->assertStatus(201);

        $this->assertDatabaseHas('jobs', [
            'title' => 'Software Engineer',
            // Make sure to include any other fields that the Job model uses which are required
        ]);
    }

    /** @test */
    public function fetch_specific_job(): void
    {
        // You should create a job entry before trying to fetch it
        $job = Job::create([
            'title' => 'Existing Job',
            'description' => 'Existing Description',
            'company' => 'Existing Company',
            'salary' => 50000,
        ]);

        $response = $this->get("http://127.0.0.1:8000/api/jobs/{$job->id}");

        $response->assertStatus(201);
    }

    /** @test */
    public function update_job()
    {
        // Create a job entry to update
        $job = Job::create([
            'title' => 'Old Title',
            'description' => 'Old Description',
            'company' => 'Old Company',
            'salary' => 40000,
        ]);

        $data = [
            'title' => 'Junior Software Engineer',
            'description' => 'Training provided',
            'company' => 'Google',
            'salary' => 25000,
        ];

        $this->withoutMiddleware();

        $response = $this->put("http://127.0.0.1:8000/api/jobs/{$job->id}", $data);

        $response->assertStatus(201);

        $this->assertDatabaseHas('jobs', [
            'title' => 'Junior Software Engineer',
            // Make sure to include any other fields that the Job model uses which are required
        ]);
    }

    /** @test */
    public function delete_job(): void
    {
        // Create a job entry to delete
        $job = Job::create([
            'title' => 'Delete Me',
            'description' => 'Delete Description',
            'company' => 'Delete Company',
            'salary' => 60000,
        ]);

        $response = $this->delete("http://127.0.0.1:8000/api/jobs/{$job->id}");

        $response->assertStatus(204);

        $this->assertSoftDeleted('jobs', [
            'id' => $job->id,
        ]);
    }
}
