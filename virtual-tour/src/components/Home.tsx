
import NavBar from './navigation/NavBar'
// import home_image from "../assets/sample.jpg"
import { Link } from 'react-router-dom'
import banner1 from "../assets/banners/1.jpg"
import banner2 from "../assets/banners/2.jpg"
import banner3 from "../assets/banners/3.jpg"
import banner4 from "../assets/banners/4.jpg"
import banner5 from "../assets/banners/5.jpg"
import banner6 from "../assets/banners/6.jpg"
import banner7 from "../assets/banners/7.jpg"
import banner8 from "../assets/banners/8.jpg"
import banner9 from "../assets/banners/9.jpg"
import banner10 from "../assets/banners/10.jpg"
import banner11 from "../assets/banners/11.jpg"
import banner12 from "../assets/banners/12.jpg"
import banner13 from "../assets/banners/13.jpg"
import banner14 from "../assets/banners/14.jpg"
import banner15 from "../assets/banners/15.jpg"

const Home = () => {
  return (
    <div className='w-full h-auto'>
      <NavBar />
      <div className='my-5'>

        <div className='w-[80%] mx-auto my-10'>
          <p className='text-black text-2xl text-center font-serif bg-amber-200 p-5 rounded-md'>
            We invite you to embark on this virtual tour and explore Ceguera Technological Colleges like never before.
            Discover our classrooms,
            laboratories, student lounges, and more all from the comfort of your home.
          </p>
        </div>

        <div className='border-t-6 border-t-amber-400 bg-black my-5 '>
          <h2 className='py-3 px-10 text-white text-2xl '>CTC VIRTUAL TOUR</h2>
        </div>


        <div className='w-[80%] flex justify-center h-xl  mx-auto mt-2'>
          {/* <img src={home_image} alt="" width={'100%'} height={'auto'} /> */}
          <iframe width="90%" height="630" frameBorder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowFullScreen scrolling="no"
            src="https://kuula.co/share/collection/7b611?logo=1&info=1&fs=1&vr=0&thumbs=-1"></iframe>
        </div>

        <div className='flex justify-center items-center my-10 cursor-pointer'>
          {/* <button className='w-64 h-12 rounded-md bg-amber-300 text-xl hover:bg-amber-500 border-2'>TAKE A TOUR</button> */}
          <Link to={"https://kuula.co/share/collection/7b611?logo=1&info=1&fs=1&vr=0&thumbs=-1"} className=' px-4 py-2 rounded-md bg-amber-300 text-xl hover:bg-amber-500 border-2' >TAKE A TOUR</Link>
        </div>
      </div>



      <div className='border-t-6 border-t-amber-400 bg-black my-2 '>
        <h2 className='py-3 px-10 text-white text-2xl text-center'>PROGRAM BANNERS</h2>
      </div>

      <div className='grid grid-cols-3  bg-gray-900 p-2 place-items-center gap-1 w-[80%] mx-auto mt-5 rounded-md'>

        <div className='px-5 py-5  rounded-md '>
          <img src={banner1} alt="" className='w-lg h-140' />
        </div>

        <div className='px-5 py-5 rounded-md '>
          <img src={banner2} alt="" className='w-lg h-140' />
        </div>

        <div className='px-5 py-5 rounded-md '>
          <img src={banner3} alt="" className='w-lg h-140' />
        </div>

        <div className='px-5 py-5 rounded-md '>
          <img src={banner4} alt="" className='w-lg h-140' />
        </div>

        <div className='px-5 py-5 rounded-md '>
          <img src={banner5} alt="" className='w-lg h-140' />
        </div>

        <div className='px-5 py-5 rounded-md '>
          <img src={banner6} alt="" className='w-lg h-140' />
        </div>

        <div className='px-5 py-5 rounded-md '>
          <img src={banner7} alt="" className='w-lg h-140' />
        </div>

        <div className='px-5 py-5 rounded-md '>
          <img src={banner8} alt="" className='w-lg h-140' />
        </div>

        <div className='px-5 py-5 rounded-md '>
          <img src={banner9} alt="" className='w-lg h-140' />
        </div>

        <div className='px-5 py-5 rounded-md '>
          <img src={banner10} alt="" className='w-lg h-140' />
        </div>

        <div className='px-5 py-5 rounded-md '>
          <img src={banner11} alt="" className='w-lg h-140' />
        </div>

        <div className='px-5 py-5 rounded-md '>
          <img src={banner12} alt="" className='w-lg h-140' />
        </div>

        <div className='px-5 py-5 rounded-md '>
          <img src={banner13} alt="" className='w-lg h-140' />
        </div>

        <div className='px-5 py-5 rounded-md '>
          <img src={banner14} alt="" className='w-lg h-140' />
        </div>

        <div className='px-5 py-5 rounded-md '>
          <img src={banner15} alt="" className='w-lg h-140' />
        </div>

      </div>

    </div>
  )
}

export default Home
