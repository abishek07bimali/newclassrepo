import { Link } from "react-router"

const Nav = () => {
    return (
        <div>
            <Link to={"/"} className='p-2 bg-green-500 text-white rounded-sm'>Home</Link>
            <Link to={"/contact"} className='p-2 ml-2 bg-green-500 text-white rounded-sm'>contact</Link>
            <Link to={"/about"} className='p-2 ml-2 bg-green-500 text-white rounded-sm'>about</Link>
            <Link to={"/register"} className='p-2 ml-2 bg-green-500 text-white rounded-sm'>Register</Link>
            <Link to={"/login"} className='p-2 ml-2 bg-green-500 text-white rounded-sm'>Login</Link>
        </div>
    )
}

export default Nav
