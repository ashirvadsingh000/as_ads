import React from 'react'
import img4 from '../../public/images/img4.jpg'
import { FaLongArrowAltRight } from "react-icons/fa";

const Section2 = () => {
  return (
<div id='Section2'
    className="w-full bg-cover bg-center"
    style={{ backgroundImage: `url(${img4})` }}
>
    <div className="container mx-auto p-4 md:p-6 lg:p-12 flex flex-col lg:flex-row justify-center items-center gap-4">
        <h2 className="lg:text-5xl text-4xl font-bold mb-4 text-center text-balance ">
            Get demo at your Whatsapp Number
        </h2>
        <div className="flex justify-center">
            <button className="bg-cyan-400 hover:bg-cyan-700 text-white font-bold py-2 px-5 rounded flex gap-3 items-center">
                <span className='text-lg'>Get demo </span>
                <FaLongArrowAltRight className='text-lg' />
            </button>
        </div>
    </div>
</div>
  )
}

export default Section2
