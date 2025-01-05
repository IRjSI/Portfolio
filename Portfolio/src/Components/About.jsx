import React from 'react';

function About() {
  return (
    <section id="about" className="flex flex-col justify-center p-4" aria-label="About Me">
      <p className='text-yellow-300 text-5xl text-center m-8 font-raleway mb-20 '>
        <p className='inline-block relative transition-all duration-300 hover:transition-all before:-translate-x-1/2 hover:before:w-full before:absolute before:left-1/2 before:bottom-[-2px] before:w-0 before:h-[2px] before:bg-yellow-300 before:transition-all before:duration-500'>
          About
        </p>
      </p>
      <div className="text-white text-xl sm:text-2xl gap-5 text-center flex flex-col justify-center p-4">
        <div className="">
          I am an Undergraduate Engineering student from India, interested in
          <br />
          <br className='hidden sm:block' />
          <span className="font-mono text-yellow-300 text-2xl sm:text-3xl">
            {'< '}Web Development{' />'}
          </span>
          <br className='hidden sm:block' />
          <br />
          and other technologies.
        </div>
        <div className='font-dancing'>.....</div>
        <ul className="bg-gray-50 bg-opacity-10 rounded-md max-w-[800px] mx-auto  sm:text-xl lg:text-xl shadow-2xl shadow-blue-600 p-8">
          <li className="m-3 hover:text-yellow-50 transition duration-300">
            Currently, I am learning ReactJS
          </li>
          <li className="m-3 hover:text-yellow-50 transition duration-300">
            I also do Music Production
          </li>
          <li className="m-3 hover:text-yellow-50 transition duration-300">
            I enjoy exploring new technologies
          </li>
          <li className="m-3 hover:text-yellow-50 transition duration-300">
            Thinking about Web3 🤔
          </li>
        </ul>
        <div className='font-dancing'>.....</div>
      </div>
    </section>
  );
}

export default About;
