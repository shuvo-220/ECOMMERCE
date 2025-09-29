import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product';
import { getProduct } from '../redux/slice/getProductSlice';

const Products = () => {

    const { isLoading, products, error } = useSelector(state => state.products);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])

    return (
        <div>
            <h1 className='text-center text-2xl text-gray-500 tracking-widest uppercase font-semibold'>Products</h1>

            <div className='flex flex-row gap-5 pt-10 pb-10'>

                <div className=" bg-gray-100 p-4 max-h-max sticky left-0 top-50 hidden md:block">
                    <h2 className="text-lg font-semibold mb-4">Category</h2>
                    <ul className="space-y-2">
                        <li className="cursor-pointer hover:text-blue-500">All</li>
                        <li className="cursor-pointer hover:text-blue-500">Electronics</li>
                        <li className="cursor-pointer hover:text-blue-500">Clothes</li>
                        <li className="cursor-pointer hover:text-blue-500">Shoes</li>
                    </ul>
                </div>




                {/* Products */}
                <div className="flex items-center justify-center mx-auto">

                    {isLoading && <p>Loading...</p>}
                    {error && <p>{error.message}</p>}

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 place-content-center">
                        {products.map((product, index) => (
                            <Product key={index} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Products