
import NavBar from './navigation/NavBar'
// import home_image from "../assets/sample.jpg"
// import { Link } from 'react-router-dom'
import VirtualTour from './Virtual Tour'
// import banner1 from "../assets/banners/1.jpg"
// import banner2 from "../assets/banners/2.jpg"
// import banner3 from "../assets/banners/3.jpg"
// import banner4 from "../assets/banners/4.jpg"
// import banner5 from "../assets/banners/5.jpg"
// import banner6 from "../assets/banners/6.jpg"
// import banner7 from "../assets/banners/7.jpg"
// import banner8 from "../assets/banners/8.jpg"
// import banner9 from "../assets/banners/9.jpg"
// import banner10 from "../assets/banners/10.jpg"
// import banner11 from "../assets/banners/11.jpg"
// import banner12 from "../assets/banners/12.jpg"
// import banner13 from "../assets/banners/13.jpg"
// import banner14 from "../assets/banners/14.jpg"
// import banner15 from "../assets/banners/15.jpg"


const images: string[] = [
  "https://firebasestorage.googleapis.com/v0/b/videos-27286.appspot.com/o/1.jpg?alt=media&token=9baf6302-834b-4eb8-92e5-a82622d9d213",
  "https://firebasestorage.googleapis.com/v0/b/videos-27286.appspot.com/o/2.jpg?alt=media&token=10a4ac99-13a8-4e31-8d4b-344c4b4f5cd5",
  "https://firebasestorage.googleapis.com/v0/b/videos-27286.appspot.com/o/3.jpg?alt=media&token=b8a653f9-db13-441a-80f5-36fb52e8ab94",
  "https://firebasestorage.googleapis.com/v0/b/videos-27286.appspot.com/o/4.jpg?alt=media&token=5423fab1-cda1-4ecf-92b8-baa9b83d6bb8",
  "https://firebasestorage.googleapis.com/v0/b/videos-27286.appspot.com/o/5.jpg?alt=media&token=fb1eb10b-eedf-460e-bd40-72ffe4417fe0",
  "https://firebasestorage.googleapis.com/v0/b/videos-27286.appspot.com/o/6.jpg?alt=media&token=97f66edf-f79e-424b-93ea-509ba95f58a0",
  "https://firebasestorage.googleapis.com/v0/b/videos-27286.appspot.com/o/7.jpg?alt=media&token=832e39db-1ac4-46ea-99bb-b5e54ea66bcb",
  "https://firebasestorage.googleapis.com/v0/b/videos-27286.appspot.com/o/8.jpg?alt=media&token=e3a241f7-f7b1-459f-8add-95fef644a069",
  "https://firebasestorage.googleapis.com/v0/b/videos-27286.appspot.com/o/9.jpg?alt=media&token=1bdf1ebf-9c3f-47b0-a352-63d921b92955",
  "https://firebasestorage.googleapis.com/v0/b/videos-27286.appspot.com/o/10.jpg?alt=media&token=9ec3fa2c-bdf4-481c-821f-c6134240a037",
  "https://firebasestorage.googleapis.com/v0/b/videos-27286.appspot.com/o/11.jpg?alt=media&token=3a1c12cb-b19d-47ed-9bf6-c69067c34e46",
  "https://firebasestorage.googleapis.com/v0/b/videos-27286.appspot.com/o/12.jpg?alt=media&token=dfacd335-634b-4ce8-89e5-05b5dbd8f354",
  "https://firebasestorage.googleapis.com/v0/b/videos-27286.appspot.com/o/13.jpg?alt=media&token=bc6e9080-9e9d-4373-b251-27f5c26ec515",
  "https://firebasestorage.googleapis.com/v0/b/videos-27286.appspot.com/o/14.jpg?alt=media&token=83398c9a-0f84-4655-a8f7-26d1d573d038",
  "https://firebasestorage.googleapis.com/v0/b/videos-27286.appspot.com/o/15.jpg?alt=media&token=6d51b4eb-5e2b-46af-9881-d27aff51bf01"

]

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


        <div className='w-[80%] flex justify-center h-auto  mx-auto mt-2'>
          {/* <img src={home_image} alt="" width={'100%'} height={'auto'} /> */}

          <VirtualTour />
        </div>

        {/* <div className='flex justify-center items-center my-10 cursor-pointer'>
          <Link to={"https://kuula.co/share/collection/7b611?logo=1&info=1&fs=1&vr=0&thumbs=-1"} className=' px-4 py-2 rounded-md bg-amber-300 text-xl hover:bg-amber-500 border-2' >TAKE A TOUR</Link>
        </div> */}
      </div>



      <div className='border-t-6 border-t-amber-400 bg-black my-2 '>
        <h2 className='py-3 px-10 text-white text-2xl text-center'>PROGRAM BANNERS</h2>
      </div>

      <div className='grid grid-cols-3  bg-gray-900 p-2 place-items-center gap-1 w-[80%] mx-auto mt-5 rounded-md'>

        {images.map((img) => (
          <div className='px-5 py-5  rounded-md '>
            <img src={img} alt="" className='w-lg h-140' />
          </div>
        ))}
        {/* 
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
        </div> */}

      </div>

    </div>
  )
}

export default Home
