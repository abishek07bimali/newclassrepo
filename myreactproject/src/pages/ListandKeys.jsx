import React, { useState } from 'react'

const ListandKeys = () => {
    const [list, setList] = useState([])
    setList(Response.data.data)
    return (
        <div>
            <ul className='flex flex-col'>
                {list.map((item, index) => (
                    <li key={index} className='border border-amber-500 m-4'>
                        <p  >  {item.id}</p>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <img src={item.image} className="h-100 w-100 rounded-full bg-red-500" alt="" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListandKeys
