
import NavBar from './navigation/NavBar'
import mission from "../assets/mission-vision/mission.png"
import vision from "../assets/mission-vision/vision.png"
import goals from "../assets/mission-vision/goals.png"

import ctc_org from "../assets/org structure/ctc-org-structure.png"
import library_org from "../assets/org structure/library org structure.jpg"
import otg_org from "../assets/org structure/otg-org-structure.jpg"

const About = () => {
    return (
        <div className='w-full h-auto'>
            <NavBar />
            <div className='border-t-6 border-t-amber-400 bg-black my-5 '>
                <h2 className='py-3 px-10 text-white text-2xl '>ABOUT CTC</h2>
            </div>

            <div className='grid grid-cols-3  bg-gray-900 p-2 place-items-center gap-1.5 w-[80%] mx-auto mt-5 rounded-md'>
                <div className='px-5 py-5  rounded-md '>
                    <img src={mission} alt="" className='w-lg h-auto' />
                </div>

                <div className='px-5 py-5 rounded-md '>
                    <img src={vision} alt="" className='w-lg h-auto' />
                </div>

                <div className='px-5 py-5 rounded-md '>
                    <img src={goals} alt="" className='w-lg h-auto' />
                </div>
            </div>




            {/* ctc structure */}
            <div className='border-t-6 border-t-amber-400 bg-black my-5 '>
                <h2 className='py-3 px-10 text-white text-2xl '>CEGUERA TECHNOLOGICAL COLLEGES ORGANIZATIONAL STRUCTURE</h2>
            </div>

            <div className='grid grid-cols-1  bg-gray-900 p-2 place-items-center gap-1.5 w-[80%] mx-auto mt-5 rounded-md'>

                <div className='px-5 py-5  rounded-md '>
                    <img src={ctc_org} alt="" className='w-xl h-auto' />
                </div>
            </div>
            {/* otg structure */}
            <div className='border-t-6 border-t-amber-400 bg-black my-5 '>
                <h2 className='py-3 px-10 text-white text-2xl '>OFFICE OF THE GUIDANCE ORGANIZATIONAL STRUCTURE</h2>
            </div>

            <div className='grid grid-cols-1  bg-gray-900 p-2 place-items-center gap-1.5 w-[80%] mx-auto mt-5 rounded-md'>
                <div className='px-5 py-5 rounded-md '>
                    <img src={otg_org} alt="" className='w-lg h-auto' />
                </div>
            </div>


            {/* library structure */}
            <div className='border-t-6 border-t-amber-400 bg-black my-5 '>
                <h2 className='py-3 px-10 text-white text-2xl '>LIBRARY ORGANIZATIONAL STRUCTURE</h2>
            </div>

            <div className='grid grid-cols-1  bg-gray-900 p-2 place-items-center gap-1.5 w-[80%] mx-auto mt-5 rounded-md'>
                <div className='px-5 py-5  rounded-md '>
                    <img src={library_org} alt="" className='w-xl h-auto' />
                </div>
            </div>

            <div className='w-[80%] mx-auto mt-5 bg-gray-900 p-5 rounded-md'>
                <div className='bg-gray-900 w-full p-5'>
                    <h2 className='text-amber-400  text-3xl font-semibold text-center my-2'>
                        Welcome to the Future of Campus Exploration
                    </h2>

                    <p className='text-white text-lg'>
                        Ceguera Technological Colleges is committed to providing quality education
                        and an exceptional learning environment for students. To make our campus more accessible to everyone,
                        we have developed this Web Virtual Tour, an interactive and immersive experience
                        that allows you to explore our facilities from anywhere in the world.

                        Whether you are a prospective student, a parent, an alumnus,
                        or a faculty member, this virtual tour offers an engaging way to discover
                        the various academic buildings, classrooms, laboratories, and recreational spaces that make up our vibrant campus.
                    </p>
                </div>





                <div className='bg-gray-900 w-full p-5'>
                    <h2 className='text-amber-400  text-3xl font-semibold text-center my-2'>
                        Why a Virtual Tour?
                    </h2>

                    <p className='text-white text-lg'>
                        Visiting a college campus in person may not always be possible due to distance,
                        scheduling conflicts, or other factors. Our Web Virtual Tour is designed to bridge that gap by providing a realistic,
                        convenient, and interactive way to explore our institution.
                    </p>


                </div>

                <div className='bg-gray-900 w-full p-5'>
                    <h2 className='text-amber-400  text-3xl font-semibold text-center my-2'>  This tour allows you to: </h2>

                    <p className='text-white text-lg'>
                        ✅ Get a 360° view of key locations across the campus.
                    </p>
                    <p className='text-white text-lg'>
                        ✅ Interact with clickable hotspots to learn more about specific buildings and facilities.
                    </p>
                    <p className='text-white text-lg'>
                        ✅ Watch video presentations and listen to audio guides for deeper insights.
                    </p>
                    <p className='text-white text-lg'>
                        ✅ Navigate effortlessly using a campus map that helps you move between different areas.
                    </p>

                </div>




            </div>
        </div>
    )
}

export default About
