import { Link } from 'react-router-dom'
import NavBar from './navigation/NavBar'

const Acads = () => {
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



        </div>



    )
}

export default Acads
