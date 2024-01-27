import React from "react";
import ProductList from './ProductList'

const RelatedProducts = ({ products }) => {

    return (
        <div className="mt-[30px] md:mt-[100px] mb-[100px] md:mb-0 px-2">
            <div className="text-2xl font-bold mb-5">You Might Also Like</div>
            <ProductList productList={products} isCatPage={true} isRealted={true} />
        </div>
    );
};

export default RelatedProducts;