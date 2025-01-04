import React from 'react';
import Block from './Block';

function Projects() {
  return (
    <div id="projects" className="p-4">
      <p className="text-yellow-300 text-5xl text-center font-montserrat m-8">
        Projects
      </p>
      
      <div className="text-white text-center text-2xl sm:text-3xl grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-5 items-center justify-center p-4 px-24">
        <Block name={'Random Quotes Generator'} />
        <Block name={'Clicks Per Second'} />
        <Block name={'Weather App'} />
        <Block name={'Todo App'} />
        <Block name={'Guess the Number'} />
        <Block name={'Image Slider'} />
      </div>
      <div className='font-dancing text-white text-center text-2xl sm:text-3xl'>.....</div>
    </div>
  );
}

export default Projects;
