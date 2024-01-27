import React, { useEffect, useState } from 'react'
import ProductList from '../components/ProductList'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCategories, fetchProducts } from '../Features/Product/ProductListSlice';
import Filters from '../components/Filters';
function Home() {
    const productList = useSelector((state) => state.productList.value)
    const category = useSelector((state) => state.productList.category)[0]
    const isLoading = useSelector((state) => state.productList.loading)
    const dispatch = useDispatch();
    const [filtervalues, setFilterValues] = useState([])
    useEffect(() => {
        dispatch(fetchProducts('https://dummyjson.com/products'))
        dispatch(fetchCategories())
    }, [])

    const handleFilterValues = (value) => {
        const newArray = filtervalues
        if (newArray.includes(value)) {
            const newArrayy = newArray?.filter((val) => val !== value);
            setFilterValues([...newArrayy])
        }
        else {
            setFilterValues(prev => [...prev, value])
        }
    }

    return (
        <>
            {isLoading ?
                <div className='flex justify-center'>
                    <span class="loader"></span>
                </div>
                :
                <div className='flex justify-center'>
                    {/* <div className='w-1/6 border-2 border-black/30 rounded-xl p-2 hidden md:flex items-center flex-col ml-4 mt-3 max-h-[76vh] overflow-y-scroll'>
                        <h1 className='font-semibold text-2xl text-center leading-4 tracking-wider mb-4'>
                            Filters
                        </h1>
                        <div class="divide-y divide-slate-200">

                        </div>
                        <div className='flex flex-wrap gap-4'>
                            {category?.map(cat => <Filters title={cat} handleFilterValues={handleFilterValues} />)}
                        </div>
                    </div> */}
                    <div >
                        <ProductList productList={productList[0]?.products} />
                        
                    </div>
                </div>
            }
        </>
    )
}

export default Home