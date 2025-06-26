import React, { useState } from 'react'
import { Button, Buttons, TextFields } from './component/Elements';

const Contact = () => {
  const [liked, setLiked] = useState(false);
  // const [dark, setDark] = useState(false);

  return (
    <div className='flex flex-col'>
      {/* <button onClick={() => setLiked(!liked)}
        className={`${liked ? "bg-red-300" : "bg-blue-300"} 
        rounded text-white`}>
        {liked ? "Loved ❤️" : "Like 👍"}
      </button> */}


      <Button onClick={() => setLiked(!liked)} label="click"
        className="bg-red-500 text-white p-3 m-2" />

      {/* <Button onClick={() => setLiked(!liked)} label="click" />
      <Button onClick={() => setLiked(!liked)} label="click" />
      <Button onClick={() => setLiked(!liked)} label="click"
        className="bg-yellow -500 text-white p-3 m-2"
      /> */}


      <TextFields placeholder="name" text="number"
        onChange={(e) => alert("change")} name="name" />





      <Buttons label="click" onclick={() => alert("alert message")} />
      <Buttons label="click me" onclick={() => alert("alert ")} />
      <Buttons label="click errro" className='bg-red-500 p-2 m-4 rounded-sm'
       onclick={() => alert("alert error")} />







      {/* <button onClick={() => setDark(!dark)}
        className={`${dark ? 'bg-gray-200 text-black'
          : 'bg-black text-white'}
       rounded-sm p-2 w-100 mt-10 `}>
        {dark ? 'light' : 'dark'}</button>
      <p className={`${dark ? "bg-black text-white" : "bg-white text-black"}`}>this is a paragraph</p>
      <p className={`${dark ? "bg-black text-white" : "bg-white text-black"}`}>this is a paragraph</p>
      <p className={`${dark ? "bg-black text-white" : "bg-white text-black"}`}>this is a paragraph</p>
      <p className={`${dark ? "bg-black text-white" : "bg-white text-black"}`}>this is a paragraph</p>
      <p className={`${dark ? "bg-black text-white" : "bg-white text-black"}`}>this is a paragraph</p> */}

    </div>
  )
}

export default Contact
