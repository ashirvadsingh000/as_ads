import React from 'react';
import img1 from  '../../public/images/img3.jpg';
import { FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {
  return (
    <div id='Home'
      className="h-screen bg-cover bg-center "
      style={{ backgroundImage: `url(${img1})` }}
    >
<div className="container mx-auto p-4  md:p-6 lg:p-12 xl:p-24 h-full place-content-end  ">

        <h1 className=" text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight text-balance ">We <br /> provide afforadable and creative Posts.</h1>
        <p className="lg:text-lg text-white pt-3 text-balance 
         ">Over the past year, we've crafted and shared hundreds of engaging social media posts, each one carefully designed to captivate our audience and spark meaningful conversations. From thought-provoking questions to behind-the-scenes glimpses, our posts have helped us build a loyal community of followers who share our passions and values.</p>
        <button
          className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded mt-5 flex gap-3 mb-4 "
          onClick={() => console.log('Button clicked!')}
        >
          View Plans  <FaLongArrowAltRight className=' self-center' />
        </button>

      </div>

    </div>
  );
};

export default Home;