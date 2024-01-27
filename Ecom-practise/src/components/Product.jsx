import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getDiscountedPrice } from '../utility/utility'

function Product({ title, price, image, id, discountedPer }) {

    const [isLiked, setIsliked] = useState(false);
    return (
        <div className="flex items-center justify-center">
            <div className="px-3">
                <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                    <Link to={`/product/${id}`}>
                        <img className="w-72 rounded-lg object-cover object-center h-56" src={image} alt={title} />
                    </Link>
                    <div className='flex justify-between items-center'>
                        <p className="my-4 pl-4 font-bold text-gray-500">{title}</p>
                        <div className='flex gap-2 p-1'>
                            <span onClick={() => { setIsliked(prev => !prev) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={`${isLiked ? '#ff0000' : '#fff'}`} viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={`${isLiked ? '0' : '2'}`} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className='flex'>
                        <p className="mb-4 ml-4 text-xl font-semibold text-gray-800 line-through">₹{price}</p>
                        <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">₹{getDiscountedPrice(price, discountedPer)}</p>
                        <span className='ml-1 text-green-500 font-semibold'>{Math.floor(discountedPer)}% off</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product