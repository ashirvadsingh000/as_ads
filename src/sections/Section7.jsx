import React from 'react'
import img5 from '../../public/images/img5.jpg'
import img6 from '../../public/images/img6.jpg'
import img7 from '../../public/images/img7.jpg'
const Section7 = () => {
  return (
    <div className=' ' id='Section7'>
      <section className="bg-gray-100 py-20 ">
      <div className="container mx-auto p-4 md:p-6 lg:p-12 justify-center self-center text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 ">Our Work</h2>
        <p className="text-lg mb-8">Take a look at some of our recent projects.</p>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <img src={img5} alt="Project 1" className="w-full h-48 object-cover rounded-t-md" />
              <h3 className="text-lg font-bold mb-2">Project 1</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
              <a href="#" className="text-blue-600 hover:text-blue-900 transition duration-300 ease-in-out">View Project</a>
            </div>
          </div>

          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <img src={img6} alt="Project 2" className="w-full h-48 object-cover rounded-t-md" />
              <h3 className="text-lg font-bold mb-2">Project 2</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
              <a href="#" className="text-blue-600 hover:text-blue-900 transition duration-300 ease-in-out">View Project</a>
            </div>
          </div>

          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <img src={img7} alt="Project 3" className="w-full h-48 object-cover rounded-t-md" />
              <h3 className="text-lg font-bold mb-2">Project 3</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
              <a href="#" className="text-blue-600 hover:text-blue-900 transition duration-300 ease-in-out">View Project</a>
            </div>
          </div>

          
        </div>

        <div className="flex justify-center mt-8">
          <a href="#" className="bg-cyan-400 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">View All Projects</a>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Section7
