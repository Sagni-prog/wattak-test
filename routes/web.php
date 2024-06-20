<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;



Route::get('/',[ProductController::class, 'index'])->name('product.index');
Route::get('/add-product',[ProductController::class, 'create'])->name('product.create');
Route::post('/add-product',[ProductController::class, 'store'])->name('product.store');
Route::get('/product/{product}',[ProductController::class, 'edit'])->name('product.edit');
Route::put('/product/{id}',[ProductController::class, 'update'])->name('product.update');


Route::get('hello',function(){

    return \App\Models\User::find(4);
});

