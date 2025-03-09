
import NavBar from './navigation/NavBar'
// import home_image from "../assets/sample.jpg"
import { Link } from 'react-router-dom'
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

        <div className='border-t-6 border-t-amber-400 bg-black my-2 '>
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

    </div>
  )
}

export default Home
