<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;

class JobPostController extends Controller
{
    /**
     * Retrieve and display all job postings from the database.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $jobPosts = Job::all();
        return response()->json($jobPosts, 201);
    }

    /**
     * Validate and store a new job posting in the database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => ['required', 'min:2'],
            'description' => ['required', 'min:2'],
            'company' => ['required', 'min:2'],
            'salary' => ['required', 'numeric', 'digits_between:1,10']
        ]);
        //Update the job post 
        //POST
        $jobPost = Job::create($validatedData);
        return response()->json($jobPost, 201);
    }

    /**
     * Display a specific job posting by its unique identifier.
     *
     * @param  string  $id  The unique identifier of the job posting.
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(string $id)
    {
        //Display individual job post
        //GET
        $jobPost = Job::findOrFail($id);
        return response()->json($jobPost, 201);
        //
    }

    /**
     * Validate the request data and update the specified job posting in the database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $id  The unique identifier of the job posting to update.
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, string $id)
    {

        //Update 
        //PUT Request 
        $jobPost = Job::findOrFail($id);

        $validatedData = $request->validate([
            'title' => ['required', 'min:2'],
            'description' => ['required', 'min:2'],
            'company' => ['required', 'min:2'],
            'salary' => ['required', 'numeric', 'digits_between:1,10']
        ]);

        $jobPost->update($validatedData);
        return response()->json($jobPost, 201);
    }

    /**
     * Remove the specified job posting from the database.
     *
     * @param  string  $id  The unique identifier of the job posting to delete.
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(string $id)
    {
        $jobPost = Job::findOrFail($id);
        $jobPost->delete();
        return response()->json(204);
    }
}
