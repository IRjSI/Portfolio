import React from 'react';

function About() {
  return (
    <section id="about" className="mt-20 sm:mt-10 lg:mt-3 flex flex-col justify-center" aria-label="About Me">
      <h1 className="font-dancing text-yellow-300 text-5xl text-center mb-16">
        About Me
      </h1>
      <div className="text-white text-xl md:text-3xl text-center flex flex-col justify-center px-4">
        <div className="mb-12">
          I am an Undergraduate Engineering student from India, interested in
          <br />
          <br />
          <span className="font-mono text-yellow-300 lg:text-4xl sm:text-3xl">
            {'< '}Web Development{' />'}
          </span>
          <br />
          <br />
          and other technologies.
        </div>
        <div className='font-dancing'>.....</div>
        <ul className="mt-3 bg-gray-50 bg-opacity-10 rounded-md p-4 max-w-[800px] mx-auto  sm:text-2xl lg:text-2xl">
          <li className="m-3 hover:text-yellow-50 transition duration-300">
            Currently, I am learning ReactJS
          </li>
          <li className="m-3 hover:text-yellow-50 transition duration-300">
            I also do Music Production
          </li>
          <li className="m-3 hover:text-yellow-50 transition duration-300">
            I enjoy exploring new technologies
          </li>
        </ul>
        <div className='font-dancing'>.....</div>
      </div>
    </section>
  );
}

export default About;
