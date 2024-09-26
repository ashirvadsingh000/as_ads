import React from 'react'
import img2 from '../../public/images/img2.jpg'
const Section3 = () => {
  return (
<div id='Section3' className='h-screen flex  gap-2 lg:flex-row bg-slate-200 lg:p-16 lg:px-24 p-8  flex-col justify-center gap-4'>
<div className=' self-center'><img className='lg:h-[450px] w-[900px]' src={img2} alt="" /></div>
    <div className=' text-center lg:text-start self-center '>
        <h1 className=' lg:text-5xl text-4xl font-bold'>Wellcome <br /> Loyality. Creativity. Innovation</h1>
        <p className=' text-lg pt-4

        '>We empower your business to thrive with creative and innovative marketing strategies, driving growth and success in the digital world.</p>
    </div>
   

</div>
  )
}

export default Section3
