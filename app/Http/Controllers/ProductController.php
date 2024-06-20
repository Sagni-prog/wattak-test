<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return Inertia::render('Products/Index',[
            'products' => $products
        ]);
    }

    public function create()
    {
        return Inertia::render('Products/AddProduct');
    }

   
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'stock' => 'required|integer',
        ]);
   
        $product = Product::create($request->all());

        return redirect()->route('product.index')->with('success', 'Product created successfully.');
    }

  
    public function show($id)
    {
        $product = Product::findOrFail($id);

        return Inertia::render('Products/Show', [
            'product' => $product,
        ]);
    }

  
    public function edit(Product $product)
    {
       return Inertia::render('Products/EditProduct', [
            'product' => $product,
        ]);
    }

    
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'sometimes|required|numeric',
            'stock' => 'sometimes|required|integer',
        ]);

        $product = Product::findOrFail($id);
        $product->update($request->all());

        return redirect()->route('product.index')->with('success', 'Product updated successfully.');
    }


    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        return redirect()->route('product.index')->with('success', 'Product deleted successfully.');
    }
}
