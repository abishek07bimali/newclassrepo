import { useState } from 'react'
import toast from 'react-hot-toast';
import { createUserApi } from '../api/api';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (e) => {
    if (!name || !email || !password) {
      return toast.error("enter all field")
    }
    try {
      const formData = new FormData();
      formData.append('userName', name);
      formData.append('email', email);
      formData.append('password', password);
      const response = await createUserApi(formData);
      if (response?.data?.success) {
        return toast.success(response?.data?.message)
      }
      else {
        return toast.error(response?.data?.message)
      }

    } catch (err) {
      console.error("Error creating user:", err);
      toast.error(err?.response?.data?.message)
    }
  }
  return (
    <div>
      <form className='mt-10 '>
        <input type="text" name="name" value={name} className='border border-amber-300 m-2 p-2'
          onChange={(e) => setName(e.target.value)} placeholder='name' />
        <input type="text" name="email" value={email} className='border border-amber-300 m-2 p-2'
          onChange={(e) => setEmail(e.target.value)} placeholder='email' />
        <input type="password" name="password" value={password} className='border border-amber-300 m-2 p-2'
          onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        {/* <input type="password" name="password" value={confirmPassword} className='border border-amber-300 m-2 p-2'
          onChange={(e) => setConfirmPassword(e.target.value)} placeholder='confirmPassword' /> */}
      </form>
      <button onClick={submit} className='bg-green-400 text-white rounded-sm p-3 ml-2'> click me</button>
    </div>
  )
}
export default Register
