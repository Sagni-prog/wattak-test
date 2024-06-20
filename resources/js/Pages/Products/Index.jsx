import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, router, usePage } from "@inertiajs/react";
import { useRoute } from "ziggy-js";
// import { Ziggy } from "./ziggy.js";

const Index = ({ products }) => {
    const route = useRoute();
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this product?")) {
            Inertia.delete(`/products/${id}`);
        }
    };

    return (
        <div className="mx-auto p-6 bg-slate-50">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-700">Products</h1>
                <Link
                    href="add-product"
                    className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
                >
                    <svg
                        className="w-6 h-6 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                    </svg>
                    Create New Product
                </Link>
            </div>
            <div className="overflow-x-auto">
                <div className="min-w-full bg-white rounded-lg shadow-lg">
                    <table className="min-w-full bg-white rounded-lg">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold w-2/5">
                                    Description
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold">
                                    Price
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold">
                                    Stock
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {products.map((product) => (
                                <tr key={product.id} className="text-gray-700">
                                    <td className="px-6 py-4">
                                        {product.name}
                                    </td>
                                    <td className="px-6 py-4 w-2/5">
                                        {product.description}
                                    </td>
                                    <td className="px-6 py-4">
                                        ${product.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        {product.stock}
                                    </td>
                                    <td className="px-6 py-4 flex space-x-2">
                                        <Link
                                            href={route(
                                                "product.edit",
                                                product
                                            )}
                                            className="inline-flex items-center justify-center h-8 w-24 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() =>
                                                handleDelete(product.id)
                                            }
                                            className="inline-flex items-center justify-center h-8 w-24 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Index;
