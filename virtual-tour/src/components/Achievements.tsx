
import NavBar from './navigation/NavBar'
import { useState } from 'react'
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)


  const images: string[] = [
    "https://firebasestorage.googleapis.com/v0/b/videos-27286.appspot.com/o/achievements%2Fctc.png?alt=media&token=3ea1d49d-1be5-4948-9391-c29f4772bd09",
     "https://firebasestorage.googleapis.com/v0/b/videos-27286.appspot.com/o/achievements%2Fctc-2.jpg?alt=media&token=86526339-0aa1-456f-80f4-1899609db1ba", 
    "https://firebasestorage.googleapis.com/v0/b/videos-27286.appspot.com/o/achievements%2Fctc-3.png?alt=media&token=9c510673-bdf9-46a8-a9eb-32b80958a99e", 
    "https://firebasestorage.googleapis.com/v0/b/videos-27286.appspot.com/o/achievements%2Fctc-4.png?alt=media&token=03f91295-2c3f-4325-ab44-c5403042d232"]

  const hanldeLeft = () => {
    setCurrentIndex((prev) => prev <= 0 ? prev + images.length - 1 : prev - 1)
  }


  const hanldeRight = () => {
    setCurrentIndex((prev) => prev === images.length - 1 ? 0 : prev + 1)
  }
  return (
    <div className='w-full h-auto'>
      <NavBar />
      <div className='my-5'>
        <div className='border-t-6 border-t-amber-400 bg-black mb-5 mt-5'>
          <h2 className='py-3  px-10 text-white text-2xl text-center'>ACHIEVEMENTS</h2>
        </div>




        <div className='w-full max-w-[80%] flex justify-center mx-auto p-5 rounded-md bg-gray-900'>
          <div className='w-full mx-auto p-2 grid grid-cols-2 gap-10 '>
            <div>
              <p className='text-black text-2xl text-center my-4 bg-amber-400 p-4 rounded-md'>Celebrates Ceguera Technological Colleges, Inc.'s participation in the Tinagba Festival 2025.</p>
              <img src={"https://firebasestorage.googleapis.com/v0/b/videos-27286.appspot.com/o/achievements%2Fctc.png?alt=media&token=3ea1d49d-1be5-4948-9391-c29f4772bd09"} alt="" className='w-full h-auto rounded-md' />
            </div>


            <div>
              <p className='text-black text-2xl text-center my-4 bg-amber-400 p-4 rounded-md'>Recognizes the New Criminologists of 2024 from Ceguera Technological Colleges.</p>
              <img src={"https://firebasestorage.googleapis.com/v0/b/videos-27286.appspot.com/o/achievements%2Fctc-2.jpg?alt=media&token=86526339-0aa1-456f-80f4-1899609db1ba"} alt="" className='w-full h-auto rounded-md' />
            </div>



            <div>
              <p className='text-black text-2xl text-center my-4 bg-amber-400 p-4 rounded-md'>Showcases Ceguera Technological Colleges' Marching Band, which won 3rd Place in the 13th Bicol Regional Military Parade.</p>
              <img src={"https://firebasestorage.googleapis.com/v0/b/videos-27286.appspot.com/o/achievements%2Fctc-3.png?alt=media&token=9c510673-bdf9-46a8-a9eb-32b80958a99e"} alt="" className='w-full h-auto rounded-md' />
            </div>



            <div>
              <p className='text-black text-2xl text-center my-4 bg-amber-400 p-4 rounded-md'>Celebrates 80 newly licensed Criminologists from Ceguera Technological Colleges who passed the February 2025 Criminology Licensure Exam.</p>
              <img src={"https://firebasestorage.googleapis.com/v0/b/videos-27286.appspot.com/o/achievements%2Fctc-4.png?alt=media&token=03f91295-2c3f-4325-ab44-c5403042d232"} alt="" className='w-full h-auto rounded-md' />
            </div>
          </div>
        </div>





        <div className='border-t-6 border-t-amber-400 bg-black mb-8 mt-5'>
          <h2 className='py-3 px-10 text-white text-2xl text-center'>GALLERY</h2>
        </div>


        <div className='relative w-full max-w-[80%] flex justify-center mx-auto p-5 rounded-md bg-gray-900'>
          <div className='w-full max-w-3xl flex justify-center mx-auto p-5 rounded-md'>
            <div className=' w-full  mx-auto overflow-hidden rounded-lg shadow-lg'>

              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images ? images.map((img, index) => (
                  <img key={index} src={img} alt="" className='w-full h-auto' />
                )) : ''}
              </div>

            </div>
          </div>


          <div className='absolute top-1/2 -translate-y-1/2 left-28 cursor-pointer' onClick={() => hanldeLeft()}>
            < FaChevronCircleLeft size={40} color='white' />
          </div>

          <div className='absolute top-1/2 -translate-y-1/2 right-28 cursor-pointer' onClick={() => hanldeRight()}>
            < FaChevronCircleRight size={40} color='white' />
          </div>

        </div>



      </div>

    </div>
  )
}

export default Achievements
