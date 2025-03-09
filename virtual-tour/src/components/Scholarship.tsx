// import React from 'react'
import NavBar from './navigation/NavBar'

const Scholarship = () => {
  return (
    <div className='w-full h-auto'>
      <NavBar />
      <div className='my-5'>
        <div className='border-t-6 border-t-amber-400 bg-black my-2 '>
          <h2 className='py-3 px-10 text-white text-2xl text-center'>SENIOR HIGHSCHOOL SCHOLARSHIPS</h2>
        </div>

        <div className='w-full max-w-4xl mx-auto bg-gray-900 px-10 pt-2 pb-10 rounded-md'>
          <h2 className='text-black text-3xl py-2 text-center font-bold bg-amber-400 font-serif my-10 rounded-md'>
            Scholarship Benefits (FREE)
          </h2>
          <p className='text-2xl text-white'>
            ✅ Tuition Fee
          </p>
          <p className='text-2xl text-white'>
            ✅ Miscellaneous Fee
          </p>
          <p className='text-2xl text-white'>
            ✅ Transportation
          </p>
          <p className='text-2xl text-white'>
            ✅ School Uniform
          </p>
          <p className='text-2xl text-white'>
            ✅ PE Uniform
          </p>
          <p className='text-2xl text-white'>
            ✅ ID with ID Lace
          </p>
          <p className='text-2xl text-white'>
            ✅ Use of Textbooks
          </p>


          {/* requirements */}

          <h2 className='text-black text-3xl py-2 text-center font-bold bg-amber-400 font-serif my-10 rounded-md'>
            Requirements for Registration
          </h2>
          <p className='text-2xl text-white'>
            📌 Photocopy of PSA Birth Certificate
          </p>
          <p className='text-2xl text-white'>
            📌 2nd Quarter Grade (Grade 10)
          </p>
          <p className='text-2xl text-white'>
            📌 1 pc. 2x2 ID Picture
          </p>


          {/* pick up points */}
          <h2 className='text-black text-3xl py-2 text-center font-bold bg-amber-400 font-serif my-10 rounded-md'>
            Pick-Up Stations for Officially Enrolled Learners
          </h2>
          <p className='text-2xl text-white'>
            🚌 Iriga City: Multiple locations including Crossing Sta. Maria, Sta. Teresita, and Brgy. Hall Sto. Niño
          </p>
          <p className='text-2xl text-white'>
            🚌 Buhi: Crossing Sagrada, Sta. Justina Brgy. Hall
          </p>
          <p className='text-2xl text-white'>
            🚌 Baao: Baao Poblacion, Crossing San Juan/Sagrada
          </p>
          <p className='text-2xl text-white'>
            🚌 Nabua/Bato: Panday Junction, St. Jude Crossing
          </p>
          <p className='text-2xl text-white'>
            🚌 Bato: Front of LCC Store, Our Lady of Salvation Parish
          </p>

          {/* contact details */}
          <h2 className='text-black text-3xl py-2 text-center font-bold bg-amber-400 font-serif my-10 rounded-md'>
            📞 Contact Details:
          </h2>
          <p className='text-2xl text-white'>
            📲 09171171098 / 09079263834 / 299-2244
          </p>
          <p className='text-2xl text-white'>
            📩 ctcseniorhigh2024@gmail.com
          </p>
          <p className='text-2xl text-white'>
            📌 Facebook: CTC – Senior High School
          </p>
        </div>
      </div>

    </div>
  )
}

export default Scholarship
