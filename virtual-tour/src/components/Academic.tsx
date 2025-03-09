import { Link } from 'react-router-dom'
import NavBar from './navigation/NavBar'

const Academic = () => {
    return (
        <div className='w-full h-auto'>
            <NavBar />
            <div className=' my-2 py-5 mb-5'>
                <h2 className='py-3 px-10 text-black text-3xl font-bold text-center font-serif'>ACADEMIC PROGRAMS</h2>
                <h2 className='px-10 text-black text-2xl font-serif text-center'>"EMPOWERING MINDS, CULTIVATING SKILLS, UPHOLDING VALUES"</h2>
            </div>

            <div className='flex justify-start items-center'>
                <Link to={'https://ctc-iriga.com/'} className='bg-amber-400  py-3 px-5 mx-9 my-5 border-1 border-black rounded-md text-lg hover:bg-amber-500 hover:text-white'>ENROLL NOW</Link>
            </div>
            {/* CBMIT */}
            <div className='border-t-6 border-t-amber-400 bg-black my-2 '>
                <h2 className='py-3 px-10 text-white text-2xl '>COLLEGE OF BUSINESS MANAGEMENT AND INFORMATION TECHNOLOGY</h2>
            </div>

            <div className='grid grid-cols-3 place-items-center w-[80%] mt-10 mx-auto'>
                <div className='w-80 h-40 p-5 rounded-md border-2 bg-gray-200 border-amber-400 hover:scale-110 transition duration-300 cursor-pointer'>
                    <h2 className='text-md text-center text-black'>BACHELOR OF SCIENCE IN OFFICE ADMINISTRATION (BSOA)</h2>
                    <div className='flex justify-center mt-6'>
                        <button className='h-8 w-25 rouned-sm bg-amber-300 text-black'>Read More</button>
                    </div>
                </div>

                <div className='w-80 h-40 p-5 rounded-md border-2 bg-gray-200 border-amber-400 hover:scale-110 transition duration-300 cursor-pointer'>
                    <h2 className='text-md text-center text-black'>BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION (BSBA)</h2>
                    <div className='flex justify-center mt-6'>
                        <button className='h-8 w-25 rouned-sm bg-amber-300 text-black'>Read More</button>
                    </div>
                </div>

                <div className='w-80 h-40 p-5 rounded-md border-2 bg-gray-200 border-amber-400 hover:scale-110 transition duration-300 cursor-pointer'>
                    <h2 className='text-md text-center text-black'>BACHELOR OF SCIENCE IN INFOTMATION TECHNOLOGY (BSIT)</h2>
                    <div className='flex justify-center mt-6'>
                        <button className='h-8 w-25 rouned-sm bg-amber-300 text-black'>Read More</button>
                    </div>
                </div>

            </div>


            {/* CTE */}
            <div className='border-t-6 border-t-amber-400 bg-black my-2 mt-10'>
                <h2 className='py-3 px-10 text-white text-2xl '>COLLEGE OF TECHNICAL EDUCATION</h2>
            </div>

            <div className='grid grid-cols-3 place-items-center w-[80%] mt-10 mx-auto'>
                <div className='w-80 h-40 p-5 rounded-md border-2 bg-gray-200 border-amber-400 hover:scale-110 transition duration-300 cursor-pointer'>
                    <h2 className='text-md text-center text-black'>BACHELOR OF ENGINEERING TECHNOLOGY (BET)</h2>
                    <div className='flex justify-center mt-6'>
                        <button className='h-8 w-25 rouned-sm bg-amber-300 text-black'>Read More</button>
                    </div>
                </div>

                <div className='w-80 h-40 p-5 rounded-md border-2 bg-gray-200 border-amber-400 hover:scale-110 transition duration-300 cursor-pointer'>
                    <h2 className='text-md text-center text-black'>BACHELOR OF TECHNICAL VOCATIONAL TEACHER EDUCATION (BTVTed)</h2>
                    <div className='flex justify-center mt-6'>
                        <button className='h-8 w-25 rouned-sm bg-amber-300 text-black'>Read More</button>
                    </div>
                </div>

                <div className='w-80 h-40 p-5 rounded-md border-2 bg-gray-200 border-amber-400 hover:scale-110 transition duration-300 cursor-pointer'>
                    <h2 className='text-md text-center text-black'>BACHELOR OF TECHNOLOGY LIVELIHOOD EDUCATION (BTLed)</h2>
                    <div className='flex justify-center mt-6'>
                        <button className='h-8 w-25 rouned-sm bg-amber-300 text-black'>Read More</button>
                    </div>
                </div>

            </div>


            {/* Crim */}
            <div className='border-t-6 border-t-amber-400 bg-black my-2 mt-10'>
                <h2 className='py-3 px-10 text-white text-2xl '>COLLEGE OF CRIMINOLOGY</h2>
            </div>

            <div className='grid grid-cols-1 place-items-center w-[80%] mt-10 mx-auto'>
                <div className='w-80 h-40 p-5 rounded-md border-2 bg-gray-200 border-amber-400 hover:scale-110 transition duration-300 cursor-pointer'>
                    <h2 className='text-md text-center text-black'>BACHELOR OF SCIENCE IN CRIMINOLOGY (BSCrim)</h2>
                    <div className='flex justify-center mt-6'>
                        <button className='h-8 w-25 rouned-sm bg-amber-300 text-black'>Read More</button>
                    </div>
                </div>

            </div>





            {/* SENIOR HIGH SCHOOL */}
            <div className='border-t-6 border-t-amber-400 bg-black my-10 '>
                <h2 className='py-3 px-10 text-white text-2xl '>SENIOR HIGHSCHOOL   </h2>
            </div>

            <div className='grid grid-cols-2 place-items-center w-[80%] my-10 mx-auto'>
                <div className='w-80 h-40 p-5 rounded-md border-2 bg-gray-200 border-amber-400 hover:scale-110 transition duration-300 cursor-pointer'>
                    <h2 className='text-md text-center text-black'>ACADEMIC TRACK</h2>
                    <div className='flex justify-center mt-6'>
                        <button className='h-8 w-25 rouned-sm bg-amber-300 text-black'>Read More</button>
                    </div>
                </div>

                <div className='w-80 h-40 p-5 rounded-md border-2 bg-gray-200 border-amber-400 hover:scale-110 transition duration-300 cursor-pointer'>
                    <h2 className='text-md text-center text-black'>TECHNICAL VOCATIONAL AND LIVELIHOOD TRACK (TVL) (BTVTed)</h2>
                    <div className='flex justify-center mt-6'>
                        <button className='h-8 w-25 rouned-sm bg-amber-300 text-black'>Read More</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Academic
