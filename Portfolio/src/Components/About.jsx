import React from 'react';

function About() {
  return (
    <section id="about" className="flex flex-col justify-center p-4" aria-label="About Me">
      <h1 className="font-montserrat text-yellow-300 text-5xl text-center m-8">
        About Me
      </h1>
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
