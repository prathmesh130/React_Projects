import React from 'react'
import { Link } from 'react-router-dom'
import { categoryItemsImages } from '../utility/utility'
function CategoryCard({ title, index }) {
    return (
        <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <Link to={`/category/${title}`} className="block">
                <div className="h-28">
                    <div
                        className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                        <img src={`${categoryItemsImages[index]}`}
                            className="w-36 h-36  mt-6 m-auto" alt="Automotive" title={title} loading="lazy"
                            width="200" height="200" />
                    </div>
                </div>
                <div className="p-6 z-10 w-full">
                    <p
                        className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                        {title}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default CategoryCard