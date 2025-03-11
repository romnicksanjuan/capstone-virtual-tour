// import rules1 from "../assets/rules/rules1.png"
// import rules2 from "../assets/rules/rules2.png"
import NavBar from './navigation/NavBar'

const Rules = () => {

    return (
        <div className='w-full h-auto '>
            <NavBar />
            <div className='border-t-6 border-t-amber-400 bg-black my-5 '>
                <h2 className='py-3 px-10 text-white text-2xl '>RULES & REGULATIONS</h2>
            </div>

            <div className='grid grid-cols-2  bg-gray-900 p-2 place-items-center gap-1.5 w-[80%] mx-auto my-5 rounded-md'>
                <div className='px-5 py-5  rounded-md '>
                    <img src={"https://firebasestorage.googleapis.com/v0/b/videos-27286.appspot.com/o/rules%2Frules1.png?alt=media&token=622c08a2-9212-45da-a8c2-0bdb82e4fd5b"} alt="" className='w-lg h-[600px]' />
                </div>

                <div className='px-5 py-5 rounded-md '>
                    <img src={"https://firebasestorage.googleapis.com/v0/b/videos-27286.appspot.com/o/rules%2Frules2.png?alt=media&token=747d2d8b-2ef8-4fd2-8300-eab56a2c2bd9"} alt="" className='w-lg h-[600px]' />
                </div>
            </div>

        </div>
    )
}

export default Rules
