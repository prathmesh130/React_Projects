import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/cartContext';
function Product() {
    const [count, setCount] = useState(0);
    const { cart, dispatch } = useCartContext();
    console.log(cart.cartItems)
    return (
        <div className='flex pt-10 p-3 justify-center md:ml-96'>
            <div className='w-80'>
                <img src="https://plus.unsplash.com/premium_photo-1666475420387-50b9bf46650f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60" alt="" className='rounded-md' />
            </div>
            <div className='flex flex-col px-5 mt-3 w-full justify-between'>
                <p className='text-lg font-semibold'>Title</p>
                <span className='w-[450px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aliquid mollitia et blanditiis suscipit omnis quam deleniti vitae id praesentium, minus ipsam. Magni, voluptatibus repellat.</span>
                <div>
                    <span className='mr-2'>Quantity :</span>
                    <button className='w-[25px] h-[25px] bg-slate-400 rounded-full text-center font-semibold disabled:bg-slate-200' onClick={() => setCount(prev => prev - 1)} disabled={!count}>-</button>
                    <span className='mx-3 font-semibold '>{count}</span>
                    <button className='w-[25px] h-[25px] bg-slate-400 rounded-full text-center font-semibold' onClick={() => setCount(prev => prev + 1)}>+</button>
                </div>
                <button className='w-full md:w-2/6 py-2 bg-yellow-300 rounded-md hover:bg-yellow-200 text-xl' onClick={() => dispatch({ type: 'add', payload: { title: 'rangelia', quamtity: 1 } })}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product