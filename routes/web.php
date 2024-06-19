<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
Route::get('/', function () {
      $user = \App\Models\User::all();
    return Inertia::render('Home',[
        'user' => $user,
    ]);
});


Route::get('hello',function(){

    return \App\Models\User::find(4);
});

