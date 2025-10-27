import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { productDetails } from '../redux/slice/ProductDetailsSlice'
import { addToCart } from '../redux/slice/AddToCartSlice'

const ProductDetails = () => {

    const { id } = useParams()

    const { isLoading, product, error } = useSelector(state => state.product)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productDetails(id))
    }, [dispatch])
    return (
        <div className='p-6'>
            <div>
                <h1 className='text-2xl text-gray-700 '>Details of #{product.name}</h1>

                <div className='flex items-center justify-center md:flex-col pt-10 gap-5'>

                    <div className='flex items-center justify-center'>
                        <img src={product.image} className='w-[350px] h-[350px]' />
                    </div>

                    <div className=''>
                        <h1 className='text-2xl text-gray-700 font-semibold'>{product.name}</h1>
                        <span className='text-gray-600'>productId:#{product._id}</span>
                        <p className='max-w-lg mt-4 text-gray-600'>{product.description}</p>
                        <div className='flex items-center justify-between'>
                            <span className='text-lg font-semibold text-neutral-900 py-3'>${product.price}</span>
                            <span>{product.rating} ({product.numOfReviews})Reviews</span>
                        </div>
                        <h3 className='text-sm text-gray-700 py-2'>Category : {product.category}</h3>

                        <button onClick={() => dispatch(addToCart({
                            _id: product._id,
                            name: product.name,
                            price: product.price,
                            image: product.image,
                            qty: 1
                        }))} className='bg-neutral-700 py-1 w-full rounded-sm text-white cursor-pointer hover:bg-neutral-950 duration-300'>Add To Cart</button>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProductDetails