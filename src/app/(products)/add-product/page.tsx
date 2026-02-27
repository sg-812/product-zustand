"use client"
import { productStore } from '@/lib/product-store';
import { Product } from '@/utils/interfaces/productInterface';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';


const AddProduct = () => {
    let { addProduct } = productStore();
    const { register, handleSubmit, reset } = useForm<Product>();

    const submitHandler = async (data: Product) => {
        console.log("Received data", data);

        let formData = new FormData();
        formData.append('name', data.name);
        formData.append('quantity', data.quantity);
        formData.append('brand', data.brand);
        formData.append('price', data.price);
        formData.append('image', data.image[0]);
        // console.log(formData,"formData");

        const res = await addProduct(formData)
        // console.log("Response in page",res);
        if (res === 201)
            reset();
        //     alert("Product added successfully")

    }
    let { products, fetchProduct, isLoading, error } = productStore();

    useEffect(() => {
        fetchProduct();
    }, []);

    // if (isLoading) {
    //     return <div className="p-4 text-center">Loading products...</div>;
    // }
    // if (error) {
    //     return <div className="p-4 text-red-500 text-center">Error: {error}</div>;
    // }
    return (
        <div>
            <div className="conatiner">
                <div className="flex ">
                    <div className='flex-1 h-screen p-10 bg-blue-100 '>
                        <h2 className='text-blue-900 mb-6 text-4xl font-bold'>Add Product</h2>
                        <form onSubmit={handleSubmit(submitHandler)}>
                            <input type="text" {...register("name")} placeholder="Product name" className="w-full  mb-3 px-2 py-2 border border-gray-500 border-xs" />
                            <input type="text" {...register("quantity")} placeholder="Quantity" className="w-full  mb-3 px-2 py-2 border border-gray-500 border-xs" />
                            <input type="text" {...register("brand")} placeholder="Brand" className="w-full  mb-3 px-2 py-2 border border-gray-500 border-xs" />
                            <input type="text" {...register("price")} placeholder="Price" className="w-full  mb-3 px-2 py-2 border border-gray-500 border-xs" />
                            <input type="file"{...register("image")} className="w-full  mb-3 px-2 py-2 border border-gray-500 border-xs" />
                            <input type="submit" className="py-2 px-4 bg-amber-200 rounded-xl border-2 border-amber-500  hover:bg-amber-500 hover:text-white" value="Add Product" />
                        </form>
                    </div>
                    <div className='flex-1 p-10 bg-yellow-100 '>
                        {isLoading ?
                            <p>Products loading</p> :
                            <>
                                <h2 className="text-3xl font-bold mb-4">Products ({products.length})</h2>
                                {products.length === 0 ? (
                                    <p className="text-gray-500">No products found.</p>
                                ) : (
                                    <ul className="space-y-2">
                                        {products.map((product) => (
                                            <li key={product?.id} className="p-3 border rounded">
                                                {product.name} - ${product.price}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </>}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct