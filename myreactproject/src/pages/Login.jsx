import { useState } from 'react'
import toast from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';
import { loginUserApi } from '../api/api';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submit = async (e) => {
        if (!email || !password) {
            return toast.error("please enter all fields")
        }
        try {
            const data = {
                email: email, password: password
            }
            const response = await loginUserApi(data);
            if (response?.data?.success) {
                localStorage.setItem("token", response?.data?.token)
                toast.success(response?.data?.message)
                const decode = jwtDecode(response?.data?.token)
                if(decode.role==="admin"){
                    // return <Navigate to={"/dashboard"}/>
                    setTimeout(() => {
                        return window.location.href="/dashboard"
                    }, 1000);
                }
                else{
                    setTimeout(() => {
                        return window.location.href="/homepage"
                    }, 1000);

                }

                return 
            }
            else {
                return toast.error(response?.data?.message)
            }
        }
        catch (err) {
            return toast.error(err?.response?.data?.message)  
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

