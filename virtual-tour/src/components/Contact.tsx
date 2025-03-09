
import NavBar from './navigation/NavBar'
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill, BsGlobe2 } from "react-icons/bs";
import { FaMobileRetro } from "react-icons/fa6";
import {  useState } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    // const [number, setNumber] = useState<string>("")
    const [message, setMessage] = useState<string>("")


    const handleSubmit = () => {
        // e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(message)

        emailjs.send("service_o3jlica", "template_2a9i2tr", {
            from_name: name,
            from_email: email,
            message: message,
        },
            "qF0SPfgPtEeerxnOs"
        )
            .then((res) => console.log(res.status))
            .catch((err) => console.log(err));

    }



    return (
        <div className='w-full h-auto'>
            <NavBar />
            <div className='border-t-6 border-t-amber-400 bg-black my-5 '>
                <h2 className='py-3 px-10 text-white text-2xl '>CONTACT US ON</h2>
            </div>

            <div className='grid grid-cols-2 w-[70%] py-5 my-10 mx-auto gap-4 place-items-start'>
                <div className='flex items-center gap-1'>
                    < FaFacebookSquare size={30} color='orange' />
                    <p className='text-lg font-bold'>Ceguera Technological Colleges,Inc</p>
                </div>

                <div className='flex items-center gap-1'>
                    < BsFillTelephoneFill size={30} color='orange' />
                    <p className='text-lg font-bold'>(054) 299-2224</p>
                </div>

                <div className='flex items-center gap-1'>
                    < MdEmail size={30} color='orange' />
                    <p className='text-lg font-bold'>ceguerairiga@gmail.com</p>
                </div>

                <div className='flex items-center gap-1'>
                    < FaMobileRetro size={30} color='orange' />
                    <p className='text-lg font-bold'>09198830109</p>
                </div>
                <div className='flex items-center gap-1'>
                    < BsGlobe2 size={30} color='orange' />
                    <p className='text-lg font-bold'>www.ctc-iriga.com</p>
                </div>
            </div>




            <div className='w-[40%] grid gap-2.5 mx-auto mt-20 py-5 px-8 bg-gray-900 rounded-md mb-2'>
                <h2 className='text-amber-400 text-2xl font-bold text-center pt-5'>
                    DIRECT MESSAGE
                </h2>
                <div>
                    <label htmlFor="" className='text-xl text-white'>Name:</label>
                    <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} className='w-full h-12 border-1 border-amber-400 px-3 py-2 rounded-md text-lg text-white' />
                </div>

                <div>
                    <label htmlFor="" className='text-xl text-white'>Email:</label>
                    <input type="email" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full h-12 border-1 border-amber-400 px-3 py-2 rounded-md text-lg text-white' />
                </div>

                <textarea name="" id="" rows={5} cols={50} value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Enter Message...' className='w-full border-1 border-amber-400 text-white p-3 text-lg '></textarea>
                <button className='w-full py-2 rounded-md bg-amber-400 text-xl cursor-pointer' onClick={() => handleSubmit()}>Submit</button>
            </div>

        </div>
    )
}

export default Contact
