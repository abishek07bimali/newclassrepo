import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Form = () => {
    const [formData, setFormData] = useState({
        name: "", email: "", password: ""
    })

    // const handleChangeTwo = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value })
    // }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const submit = () => {
        if (formData.name === "" || formData.email === "" || formData.password === "") {
            return toast.error("please enter all field")
        }
        toast.success(`thank you for your registration ${formData.name}`)
    }
    return (
        <div>
            <form className='mt-10 ' >
                <input type="text" name="name" value={formData.name}
                    className='border border-amber-300 m-2 p-2'
                    onChange={handleChange} placeholder='name' required />


                <input type="email" name="email" value={formData.email}
                    className='border border-amber-300 m-2 p-2'
                    onChange={handleChange} placeholder='email' required />

                <input type="text" name="password" value={formData.password}
                    className='border border-amber-300 m-2 p-2'
                    onChange={handleChange} placeholder='password' required />
            </form>
            <button onClick={submit}> click me</button>
        </div>
    )
}

export default Form
