import React from 'react'
import '../assets/css/section5.css'
import logo1 from '../../public/logos/logo1.png'
import logo2 from '../../public/logos/logo2.png'
import logo3 from '../../public/logos/logo3.png'
const Section5 = () => {
  return (
<div className='bg-slate-200 flex flex-col justify-center h-full' id='Section5'>
    <h1 className='lg:text-5xl text-4xl self-center mb-3 font-bold'>Our Services </h1>
<div className="flex-container">
  <div className="item-1">
    <div className="icon self-center">
     <img src={logo1} alt=""  className=' self-center'/>
    </div>
    <p className="subtitle-flex"><a href="" className='text-cyan-400'>Configure</a></p>
    <div className="middle-text">
      Political <br />
    Demo <br />
     
    </div>
    <div className="footer-text">
      <p>Set up and deploy devices in bulk</p>
    </div>
    <div className="base-wrap">
      <div className="base"></div>
    </div>
  </div>
  <div className="item-2">
  <div className="icon self-center">
     <img src={logo2} alt=""  className=' self-center'/>
    </div>
    <p className="subtitle-flex"><a href="" className='text-cyan-400'>Automate</a></p>
    <div className="middle-text">
      Business <br />
      Demo <br />
    </div>
    <div className="footer-text">
      <p>Automatic enrollment of unlimited amount of devices</p>
    </div>
    <div className="base-wrap">
      <div className="base"></div>
    </div>
  </div>
  <div className="item-3">
  <div className="icon self-center">
     <img src={logo3} alt=""  className=' self-center'/>
    </div>
    <p className="subtitle-flex"><a href="" className='text-cyan-400'>Empower</a></p>
    <div className="middle-text">
      Personal <br />
      Demo <br />
      
    </div>
    <div className="footer-text">
      <p>Access data everywhere, without compromising with mobile security</p>
    </div>
  </div>
</div>
</div>
  )
}

export default Section5
