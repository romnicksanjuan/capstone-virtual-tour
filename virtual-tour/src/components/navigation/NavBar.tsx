
import logo from "../../assets/ctc-logoo.jpg"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div className='flex w-full p-2 bg-amber-400'>
        <div className="flex items-center gap-3.5">
          <img src={logo} className='w-28 h-auto ' alt="" />
          <div>
            <h2 className="text-3xl text-white  font-serif">Ceguera Technological Colleges, INC</h2>
            <h2 className="text-xl text-white font-serif">High-way 1 Francia, Iriga City</h2>
          </div>

        </div>
      </div>

      <nav className='bg-black w-full h-20 flex items-center px-4 py-2 sticky top-0 z-10'>
        <Link to={'/'} className='text-xl text-white hover:border-b-2 border-b-white px-4 py-2 hover:text-amber-400 '>Home</Link>
        <Link to={'/academics'} className='text-xl text-white  hover:border-b-2 border-b-white px-4 py-2 hover:text-amber-400 '>Academics</Link>
        <Link to={'/scholarships'} className='text-xl text-white  hover:border-b-2 border-b-white px-4 py-2 hover:text-amber-400 '>Scholarships</Link>
        <Link to={'/achievements'} className='text-xl text-white hover:border-b-2 border-b-white px-4 py-2 hover:text-amber-400 '>Achievements</Link>
        <Link to={'/about'} className='text-xl text-white  hover:border-b-2 border-b-white px-4 py-2 hover:text-amber-400 '>About</Link>
        <Link to={'/rules'} className='text-xl text-white  hover:border-b-2 border-b-white px-4 py-2 hover:text-amber-400 '>Rules</Link>
        <Link to={'/contact'} className='text-xl text-white  hover:border-b-2 border-b-white px-4 py-2 hover:text-amber-400 '>Contact Us</Link>
      </nav>
    </>


  )
}

export default NavBar
