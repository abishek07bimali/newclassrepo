import React, { useState } from 'react'
import { Button } from './component/Buttons'
import { NewButtons } from './component/Elements'

const About = () => {
  const [liked, setLiked] = useState(false)
  const [darkmode, setDarkmode] = useState(false)
  return (

    <div className='flex align-center justify-center mt-5 flex-col'>

      <Button label='clickme' onClick={() => setDarkmode(!darkmode)}
        className='bg-red-400' />

      {/* <button onClick={() => setLiked(!liked)}

        className={`${liked ? 'bg-red-400 ' : 'bg-blue-300'} 
        p-2 rounded-sm text-white`}


      >
        {liked ? "Loved ❤️" : "like 👍"}</button> */}

      <NewButtons text="register" onClick={() => alert("alert")}
        className='bg-red-500 text-white 
            p-2 m-2 rounded-2xl' />
      <NewButtons text="login" onClick={() => alert("alert1")} />
      <NewButtons text="register1" onClick={() => alert("alert2")} />
      <NewButtons text="register1" onClick={() => alert("alert3")} />



      <button onClick={() => setDarkmode(!darkmode)}> Toggle {darkmode ? 'Light' : 'Dark'} Theme</button>
      <p className={`${darkmode ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-100 text-gray-900 border-gray-300'}`}>this is a testing text</p>
      <p className={`${darkmode ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-100 text-gray-900 border-gray-300'}`}>this is a testing text</p>
      <p className={`${darkmode ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-100 text-gray-900 border-gray-300'}`}>this is a testing text</p>
      <p className={`${darkmode ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-100 text-gray-900 border-gray-300'}`}>this is a testing text</p>
    </div>
  )
}

export default About
