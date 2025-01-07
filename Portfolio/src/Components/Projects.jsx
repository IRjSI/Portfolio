import React from 'react';
import Block from './Block';

function Projects() {
  return (
    <div id="projects" className="p-4">
      <p className='text-yellow-300 text-5xl text-center m-8 font-raleway mb-20 '>
        <p className='inline-block relative transition-all duration-300 hover:transition-all before:-translate-x-1/2 hover:before:w-full before:absolute before:left-1/2 before:bottom-[-2px] before:w-0 before:h-[2px] before:bg-yellow-300 before:transition-all before:duration-500'>
          Projects
        </p>
      </p>
      
      <div className="text-white text-center text-2xl sm:text-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-center p-4 px-24">
        <Block name={'Random Quotes Generator'} />
        <Block name={'Clicks Per Second'} />
        <Block name={'Weather App'} />
        <Block name={'To-Do App'} />
        <Block name={'Guess the Number'} />
        <Block name={'Image Slider'} />
        <Block name={'Password Generator'} />
      </div>
      <div className='font-dancing text-white text-center text-2xl sm:text-3xl'>.....</div>
    </div>
  );
}

export default Projects;
