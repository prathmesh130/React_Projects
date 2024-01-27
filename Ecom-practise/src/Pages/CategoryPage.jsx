import React, { useEffect, useState } from 'react'
import CategoryCard from '../components/CategoryCard';
import { useSelector } from 'react-redux'
function CategoryPage() {
    const category = useSelector((state) => state.productList.category)[0]
    return (
        <section className="bg-white py-4 min-h-[76vh] overflow-y-scroll">
            <div className="container mx-auto px-[12px] md:px-24 xl:px-12 nanum2">
                <h1 className="text-center text-5xl pb-12">Categories we serve</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
                    {category?.map((item, index) => <CategoryCard title={item} index={index} />
                    )}
                </div>
            </div>
        </section>
    )
}

export default CategoryPage