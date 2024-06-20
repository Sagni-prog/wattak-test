import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, router, usePage } from "@inertiajs/react";
import { route } from "ziggy-js";
import { TiTimes } from "react-icons/ti";

const Index = ({ products }) => {
    const { flash } = usePage().props;
    const [visible, setVisible] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [productId, setProductId] = useState(null);

    const openModal = (id) => {
        setProductId(id);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setProductId(null);
    };

    const handleDelete = () => {
        if (productId) {
            router.delete(`product/${productId}`);

            closeModal();
        }
    };

    return (
        <div className="mx-auto p-6 bg-slate-50">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-700">Products</h1>
                <Link
                    href={route("product.create")}
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

            {flash.success && visible && (
                <div className="mb-6 flex justify-between items-center p-4 bg-green-100 text-green-700 rounded-lg">
                    <p>{flash.success}</p>
                    <TiTimes
                        className="text-2xl cursor-pointer"
                        onClick={() => setVisible(false)}
                    />
                </div>
            )}

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
                                            href={route("product.edit", {
                                                product: product.id,
                                            })}
                                            className="inline-flex items-center justify-center h-8 w-24 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() =>
                                                openModal(product.id)
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

            {modalVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                        <h2 className="text-xl font-bold mb-4">
                            Confirm Delete
                        </h2>
                        <p className="mb-4">
                            Are you sure you want to delete this product?
                        </p>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={closeModal}
                                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDelete}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Index;
