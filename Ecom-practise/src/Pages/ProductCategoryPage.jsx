import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ProductList from '../components/ProductList';

function ProductCategoryPage() {
    const { id } = useParams();
    const [product, setProduct] = useState()
    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${id}`)
            .then(res => res.json()).then((data) => { setProduct(data.products) })
    }, [])
    return (
        <div>
            <ProductList productList={product} isCatPage={true} />
        </div>
    )
}

export default ProductCategoryPage