import React, { useEffect } from 'react'
import Product from './Product';
export default function ProductList({ productList, isCatPage, isRealted }) {
    return (

        <div className={`${!isRealted ? 'max-h-[76vh] overflow-y-scroll py-2' : 'overflow-x-scroll'}`}>
            <div className={`flex gap-4 justify-center ${!isRealted ? 'flex-wrap' : ' '}`} >
                {
                    productList?.map(item => <Product
                        title={item.title}
                        key={item.id}
                        id={item.id}
                        price={item.price}
                        image={item.thumbnail}
                        discountedPer={item.discountPercentage}
                    />)
                }
            </div>
            {!isCatPage &&
                <div className='mt-4'>
                    <h1 className='font-bold text-black text-center'>Pagination</h1>
                </div>
            }
        </div >


    )
}
