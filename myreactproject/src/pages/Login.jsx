import { useState } from 'react'
import toast from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';
import { loginUserApi } from '../api/api';
import { Navigate } from 'react-router';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submit = async (e) => {
        if (!email || !password) {
            return toast.error("please enter all fields")
        }
        try {
            const data = {
                email: email,
                password: password
            };
            const res = await loginUserApi(data);
            if (res?.data?.success) {
                localStorage.setItem("token",res.data.token)
                toast.success(res?.data?.message)
                const decoded=jwtDecode(res?.data?.token)
                if(decoded.role==="user"){
                    setTimeout(() => {
                        return window.location.href='/dashboard'
                    }, 1000);
                }
                else{
                      setTimeout(() => {
                        return window.location.href='/homepage'
                    }, 1000);
                }

                return 
            }
            else {
                return toast.error(res?.data?.message)
            }

        } catch (err) {
            toast.error(err?.response?.data?.message);
        }
    }
    return (
        <div>
            <form className='mt-10 '>
                <input type="text" name="email" value={email} className='border border-amber-300 m-2 p-2'
                    onChange={(e) => setEmail(e.target.value)} placeholder='email' />
                <input type="password" name="password" value={password} className='border border-amber-300 m-2 p-2'
                    onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            </form>
            <button onClick={submit} className='bg-green-400 text-white rounded-sm p-3 ml-2'> click me</button>
        </div>
    )
}
export default Login
