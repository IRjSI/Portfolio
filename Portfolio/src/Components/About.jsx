import React from 'react';

function About() {
  return (
    <section id="about" className="flex flex-col justify-center p-4 min-h-screen scroll-mt-24" aria-label="About Me">
      <h2 className='text-blue-400 text-5xl text-center m-8 font-raleway mb-20'>
        <span className='inline-block relative transition-all duration-300 hover:transition-all before:-translate-x-1/2 hover:before:w-full before:absolute before:left-1/2 before:bottom-[-2px] before:w-0 before:h-[2px] before:bg-blue-400 before:transition-all before:duration-500'>
          About Me
        </span>
      </h2>

      <div className="text-white text-xl sm:text-2xl gap-8 text-center flex flex-col justify-center p-4">
        <div className="max-w-3xl mx-auto">
          <p className="mb-6">
            I am an Undergraduate Engineering student from India, passionate about technology and innovation.
          </p>
          <span className="font-mono text-blue-400 text-2xl sm:text-3xl inline-block mb-6">
            {'< '}Building the Future{' />'}
          </span>
        </div>
        
        <div className="relative max-w-[600px] mx-auto w-full">
          <div className="absolute inset-0 w-full bg-[#2b3a58] bg-opacity-10 backdrop-blur-2xl border-1 border-white h-full min-h-[100px] rounded-md hover:rounded-sm transition-all hover:transition-all hover:bg-[#00000f] text-white p-2 shadow-[#42556b86] shadow-md flex justify-center items-center"></div>
          <ul className="relative rounded-lg shadow-2xl shadow-blue-600/50 p-8 transition-all duration-300 hover:shadow-blue-700/50 hover:transform hover:scale-[1.02] space-y-4">
            <li className="hover:text-blue-300 transition duration-300 flex items-center gap-3">
              <span className="text-2xl">⚛️</span>
              Mastering Modern Web Development with React
            </li>
            <li className="hover:text-blue-300 transition duration-300 flex items-center gap-3">
              <span className="text-2xl">🎵</span>
              Creating Digital Music & Sound Design
            </li>
            <li className="hover:text-blue-300 transition duration-300 flex items-center gap-3">
              <span className="text-2xl">🧑🏻‍💻</span>
              Exploring Emerging Technologies & Innovation
            </li>
            <li className="hover:text-blue-300 transition duration-300 flex items-center gap-3">
              <span className="text-2xl">🌐</span>
              Diving into Web3 & Blockchain Technology
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
