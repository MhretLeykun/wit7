<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
class ProfilesController extends Controller
{
    public function init($user)
    {
        $user  = \App\User::find($user);
        return response()->json(['user' => $user], 200);
    }
    public function show()
    {
       $user = Auth::user();
    //    return response()->json(['user' => $user], 200);
    }
    public function index(Request $request)
    {
        $profile = new \App\Profile();
        $profile->bio = $request->bio;
        $profile->tag_1 = $request->tag_1;
        $profile->tag_2 = $request->tag_2;
        $profile->tag_3 = $request->bio;
        $profile->user_id = auth()->user()->id;
        $profile->save();
        return response()->json($profile, 200);
    }
}
