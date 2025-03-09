
import NavBar from './navigation/NavBar'

const About = () => {
    return (
        <div className='w-full h-auto'>
            <NavBar />
            <div className='border-t-6 border-t-amber-400 bg-black my-5 '>
                <h2 className='py-3 px-10 text-white text-2xl '>ABOUT CTC</h2>
            </div>

            <div className='grid grid-cols-2 gap-1.5 w-[80%] mx-auto mt-14'>
                <div className='px-5 py-5  bg-gray-900 rounded-md hover:scale-105 transition duration-300'>
                    <h2 className='text-amber-400 text-center text-3xl mb-2'>MISSION</h2>
                    <p className='text-white text-xl'>
                        The Ceguera Technological Colleges' dedicates itself to the enhancement of a progressive way of life of the
                        people in the service area through its institutional program deliveries
                    </p>
                </div>

                <div className='px-5 py-5 bg-gray-900 rounded-md hover:scale-105 transition duration-300'>
                    <h2 className='text-amber-400 text-center text-3xl mb-2'>VISION</h2>
                    <p className='text-white text-xl'>
                        The Ceguera Technological Collges sees itself as an excellent institution for highier, technical and K-12
                        education amd accredited center for nominal training and competency assessment.
                    </p>
                </div>
            </div>


            <div className='w-[80%] mx-auto mt-10 bg-gray-900 p-5 rounded-md'>
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
