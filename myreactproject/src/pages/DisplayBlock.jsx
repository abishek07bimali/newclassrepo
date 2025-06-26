import React, { useState } from 'react'

const DisplayBlock = () => {
    const [isvisible, setIsvisible] = useState(true);
     const display=()=>{
        setIsvisible(!isvisible)
     }
    return (
        <div>
            <button onClick={display}>change</button>
            {
                !isvisible ? <></> :
                    <div className='h-10 bg-red-500'>
                        this is a division
                    </div>
            }
            <div className={`${isvisible ? 'block' : 'hidden'}
             h-10 bg-green-500`}>
                this is a division
            </div>
            
        </div>
    )
}

export default DisplayBlock
