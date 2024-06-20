import React, { useState } from "react";
import { Link, useForm, router } from "@inertiajs/react";

const AddProduct = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState();
    const [stock, setStock] = useState();

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        const data = { name, description, price, stock };

        console.log(data);
        e.preventDefault();
        router.post("/add-product", data);
    };

    return (
        <div className="mx-auto p-6 bg-white rounded-lg shadow-lg max-w-2xl mt-20">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-700">
                    Create New Product
                </h1>
                <Link
                    href="/"
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600 transition"
                >
                    Back to Products
                </Link>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                    />
                    {/* {errors.name && (
                        <div className="text-red-500 text-sm mt-2">
                            {errors.name}
                        </div>
                    )} */}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                    />
                    {/* {errors.description && (
                        <div className="text-red-500 text-sm mt-2">
                            {errors.description}
                        </div>
                    )} */}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Price
                    </label>
                    <input
                        type="number"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                    />
                    {/* {errors.price && (
                        <div className="text-red-500 text-sm mt-2">
                            {errors.price}
                        </div>
                    )} */}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Stock
                    </label>
                    <input
                        type="number"
                        name="stock"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                    />
                    {/* {errors.stock && (
                        <div className="text-red-500 text-sm mt-2">
                            {errors.stock}
                        </div>
                    )} */}
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        // disabled={processing}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
                    >
                        Create Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
