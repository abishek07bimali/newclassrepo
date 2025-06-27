import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router"
import Homepage from './pages/Homepage'
import Contact from './pages/Contact'
import About from './pages/About'
import Nav from './pages/component/Nav'
import Register from './pages/Register'
import Forms from './pages/Forms'
import DisplayBlock from './pages/DisplayBlock'
import { Toaster } from 'react-hot-toast'
import ListandKeys from './pages/ListandKeys'
import {ListandKeysDefault} from './pages/component/Buttons'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import UserHomepage from './pages/UserHomepage'
import EditUser from './pages/EditUser'
function App() {

  return (
    <Router>
      <Toaster/>
      <Nav />
      <Routes>
        <Route path='' element={<Homepage></Homepage>} />
        <Route path='/contact' element={<Contact></Contact>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/form' element={<Forms></Forms>} />
        <Route path='/display' element={<DisplayBlock></DisplayBlock>} />
        <Route path='/list' element={<ListandKeys></ListandKeys>} />
        <Route path='/listnew' element={<ListandKeysDefault></ListandKeysDefault>} />
        <Route path='/dashboard' element={<Dashboard></Dashboard>} />
        <Route path='/homepage' element={<UserHomepage></UserHomepage>} />
        <Route path='/edit-user/:id' element={<EditUser></EditUser>} />
      </Routes>
    </Router>
  )
}

export default App
