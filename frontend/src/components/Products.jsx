import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product';
import { getProduct } from '../redux/slice/getProductSlice';
import Category from './Category';

const Products = () => {

    const { isLoading, products, error } = useSelector(state => state.products);
    const selectedCategory = useSelector(state=>state.category.category);
    const search = useSelector(state=>state.search.query)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])

    //filter product
    const filterProducts = 
    selectedCategory === 'all' ? products : products.filter((p)=>p.category===selectedCategory)

    const allProduct = filterProducts.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className=''>
            <h1 className='text-center text-2xl text-gray-500 tracking-widest uppercase font-semibold'>Products</h1>

            <div className='flex flex-row gap-5 pt-10 pb-10'>

                <div className=" bg-gray-100 p-4 max-h-max hidden lg:block fixed top-30">
                    <h2 className="text-lg font-semibold mb-4">Category</h2>
                    <Category />
                </div>




                {/* Products */}
                <div className="flex items-center justify-center mx-auto">

                    {isLoading && <p>Loading...</p>}
                    {error && <p>{error.message}</p>}

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 place-content-center">
                        {allProduct.map((product, index) => (
                            <Product key={index} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Products