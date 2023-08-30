import { Link } from 'react-router-dom';
export default function Products() {
    return (
        <div className='h-full p-4 grid md:grid-cols-4  gap-3 overflow-y-auto grid-cols-2'>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                <Link to={`products/${num}`}>
                    <div className='p-2 flex flex-col rounded-md justify-center items-center'>
                        <img src="https://plus.unsplash.com/premium_photo-1666475420387-50b9bf46650f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60" alt="" className='w-48 rounded-md' />
                        <span>Bugie guu</span>
                        <span>Rs 250</span>
                    </div>
                </Link>
            ))}
        </div>
    )
}
