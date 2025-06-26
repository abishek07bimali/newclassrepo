import React, { useState } from 'react'
import toast from 'react-hot-toast';

export function Button({ label, onClick, className }) {
    return <button onClick={onClick} className={`${className ?
        className : 'bg-green-400 text-white rounded-sm p-3'}`}>{label}
    </button>;
}





export const ListandKeysDefault = () => {
    const [list, setList] = useState([{ id: 1, name: "product 1", price: 120, image: "vite.svg" },
    { id: 2, name: "product 2", price: 120 },
    { id: 3, name: "product 3", price: 120 }])
    return (
        <div>
            <ul className='flex flex-row'>
                {list.map((item, index) => (
                    <div key={index} className='border border-amber-500 m-4'>
                        <li  >  {item?.id}</li>
                        <li  >  {item?.name}</li>
                        <li  >  <img src={item?.image} alt="" className='h-50 w-50 rounded-full bg-red-400' /></li>
                        <li  >  {item?.price}</li>
                        <button onClick={() => toast.success("product added to cart.")}>add to card</button>

                    </div>
                ))}
            </ul>
        </div>
    );
}

