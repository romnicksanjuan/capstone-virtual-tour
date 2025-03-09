
import NavBar from './navigation/NavBar'
import img1 from '../assets/achievements/ctc.png'
import img2 from '../assets/achievements/ctc-2.jpg'
import img3 from '../assets/achievements/ctc-3.png'
import img4 from '../assets/achievements/ctc-4.png'
import { useState } from 'react'
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)


  const images: string[] = [img1, img2, img3, img4]

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




        <div className='w-full max-w-3xl flex justify-center mx-auto p-5 rounded-md bg-gray-900'>
          <div className='w-full mx-auto p-2 grid grid-cols-1 gap-10'>
            <div>
              <p className='text-black text-2xl text-center my-4 bg-amber-400 p-4 rounded-md'>Celebrates Ceguera Technological Colleges, Inc.'s participation in the Tinagba Festival 2025.</p>
              <img src={img1} alt="" className='w-full h-auto rounded-md' />
            </div>


            <div>
              <p className='text-black text-2xl text-center my-4 bg-amber-400 p-4 rounded-md'>Recognizes the New Criminologists of 2024 from Ceguera Technological Colleges.</p>
              <img src={img2} alt="" className='w-full h-auto rounded-md' />
            </div>



            <div>
              <p className='text-black text-2xl text-center my-4 bg-amber-400 p-4 rounded-md'>Showcases Ceguera Technological Colleges' Marching Band, which won 3rd Place in the 13th Bicol Regional Military Parade.</p>
              <img src={img3} alt="" className='w-full h-auto rounded-md' />
            </div>



            <div>
              <p className='text-black text-2xl text-center my-4 bg-amber-400 p-4 rounded-md'>Celebrates 80 newly licensed Criminologists from Ceguera Technological Colleges who passed the February 2025 Criminology Licensure Exam.</p>
              <img src={img4} alt="" className='w-full h-auto rounded-md' />
            </div>
          </div>
        </div>





        <div className='border-t-6 border-t-amber-400 bg-black mb-8 mt-5'>
          <h2 className='py-3 px-10 text-white text-2xl text-center'>GALLERY</h2>
        </div>


        <div className='w-full max-w-3xl flex justify-center mx-auto p-5 rounded-md bg-gray-900'>
          <div className='relative w-full  mx-auto overflow-hidden rounded-lg shadow-lg'>

            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images ? images.map((img, index) => (
                <img key={index} src={img} alt="" className='w-full h-auto' />
              )) : ''}
            </div>

            <div className='absolute top-1/2 -translate-y-1/2 left-4 cursor-pointer' onClick={() => hanldeLeft()}>
              < FaChevronCircleLeft size={40} color='black' />
            </div>

            <div className='absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer' onClick={() => hanldeRight()}>
              < FaChevronCircleRight size={40} color='black' />
            </div>
          </div>
        </div>



      </div>

    </div>
  )
}

export default Achievements
