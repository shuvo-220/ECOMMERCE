import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/slice/AddToCartSlice';

const Product = ({ product }) => {
    const { name, price, image, rating, numOfReviews, category, _id } = product;

    const dispatch = useDispatch()

    return (
        <div className='max-w-sm overflow-hidden rounded-sm relative border border-gray-300 hover:-translate-y-2 hover:shadow-lg duration-300'>
            <Link to={`/product/${_id}`}>
                <div>
                    <p className='absolute top-0 right-0 bg-neutral-600 py-0.5 px-1 text-white z-10'>{category}</p>
                    <img src={image} className='w-[250px] h-[200px] object-fit duration-300' />
                </div>
                <div className='p-2'>
                    <h3 className='text-lg text-gray-700 py-1'>{name}</h3>
                    <div className='flex items-center justify-between py-1'>
                        <span className='text-lg font-semibold text-neutral-800'>${price}</span>
                        <span className='text-sm'>{numOfReviews} Reviews</span>
                    </div>
                </div>
            </Link>

            <div className='py-2 px-2'>
                <button onClick={()=>dispatch(addToCart({name,price,qty:1,image, _id}))} className='w-full cursor-pointer bg-neutral-600 text-white py-1 rounded-sm hover:bg-neutral-950 duration-300'>Add To Cart</button>
            </div>

        </div>
    )
}

export default Product