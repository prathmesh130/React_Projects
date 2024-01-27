import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ProductDetailsCarousel from '../components/ProductDetailsCarousel'
import { getDiscountedPrice } from '../utility/utility'
import RelatedProducts from '../components/RelatedProducts';
function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        (
            async () => {
                setLoading(true)
                let response = await fetch(`https://dummyjson.com/products/${id}`)
                const data = await response.json()
                const resp = await fetch(`https://dummyjson.com/products/category/${data.category}?limit=10`)
                const relatedData = await resp.json()
                setProduct(data)
                setProducts(relatedData.products)
                setLoading(false)
            }
        )()
    }, [id])
    return (
        <div>
            {loading ? <div className='flex justify-center items-center'>
                <span class="loader"></span>
            </div> :
                <>
                    <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px] sm:mt-2">
                        <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0 py-3">
                            <ProductDetailsCarousel images={product?.images
                            } />
                        </div>
                        <div className="flex-[1] py-3 px-4">
                            {/* PRODUCT TITLE */}
                            <div className="text-[34px] font-semibold mb-2 leading-tight">
                                {product?.title}
                            </div>

                            {/* PRODUCT SUBTITLE */}
                            <div className="text-lg font-semibold text-black">
                                {product?.description
                                }
                            </div>

                            {/* PRODUCT PRICE */}
                            <div className="flex gap-4 items-center">
                                MRP :
                                <p className="text-lg font-semibold line-through">
                                    &#8377; {product?.price}
                                </p>
                                <p className="text-xl font-semibold ">
                                    &#8377; {getDiscountedPrice(product?.price, product?.discountPercentage)}
                                </p>
                                <span className='text-green-500 text-base font-medium'>{Math.floor(product?.discountPercentage)}% off</span>
                            </div>

                            <div className="text-md font-medium text-black/[0.5]">
                                incl. of taxes
                            </div>

                            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium 
                    transition-transform active:scale-95 mb-3 hover:opacity-75">
                                Add to Cart
                            </button>
                            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 mb-10">
                                Whishlist
                            </button>
                        </div>
                    </div>
                    <RelatedProducts products={products || []} />
                </>
            }
        </div>
    )
}

export default ProductPage