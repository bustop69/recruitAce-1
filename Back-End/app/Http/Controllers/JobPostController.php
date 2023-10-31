<?php

namespace App\Http\Controllers;

use App\Models\Jobs;
use Illuminate\Http\Request;

class JobPostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    //GET
    public function index()
    {
        $jobPosts = Jobs::all();
        return response()->json($jobPosts, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //Update the job post 
        //POST
        $jobPost = Jobs::create($request->all());
        return response()->json($jobPost, 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //Display individual job post
        //GET
        $jobPost = Jobs::findOrFail($id);
        return response()->json($jobPost, 200);
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //Update 
        //PUT Request 
        $jobPost = Jobs::findOrFail($id);
        $jobPost->update($request->all());
        return response()->json($jobPost, 200);
    }


    public function destroy(string $id)
    {
        $jobPost = Jobs::findOrFail($id);
        $jobPost->delete();
    }
}
