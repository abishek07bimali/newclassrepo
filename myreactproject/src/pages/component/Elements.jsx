import React from 'react'

export function Button({ label, onclick, className }) {
    return (
        <div>
            <button onClick={onclick} className={`${className ?
                className : "bg-green-500 text-white p-3 m-2"
                }`} >{label}</button>
        </div>
    )
}

export function TextFields({ text, onChange, placeholder, name }) {
    return (
        <div>
            <input type={text} placeholder={placeholder} name={name}
                onChange={onChange} className='border
                 border-amber-500' />
        </div>
    )
}
export function Labels() {
    return (
        <div>

        </div>
    )
}



export function Buttons({ label, onclick, className }) {
    return (
        <div>
            <button onClick={onclick}
                className={`${className ? className :
                    'bg-green-500 text-white p-2 m-4 rounded-sm'}`}>{label}</button>
        </div>
    )
}


export function NewButtons({ text, onClick, className }) {
    return (
        <div>
            <button onClick={onClick} className={`${className ?
                     className : 
                'bg-green-500 text-white p-2 m-2 rounded-2xl'}`}>
                {text}</button>
        </div>
    )
}
