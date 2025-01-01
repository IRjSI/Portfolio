import React from 'react';
import Block from './Block';

function Projects() {
  return (
    <div id="projects" className="mt-10 sm:mt-10 lg:mt-10 p-4">
      <p className="text-yellow-300 text-4xl md:text-5xl text-center mb-9 font-dancing">
        Projects
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center">
        <Block name={'Random Quotes Generator'} />
        <Block name={'Clicks Per Second'} />
        <Block name={'Weather App'} />
        <Block name={'Todo App'} />
        <Block name={'Guess the Number'} />
        <Block name={'Image Slider'} />
      </div>
      <div className="md:hidden text-white text-xl md:text-3xl text-center flex flex-col justify-center px-4">
          <p>.....</p>
      </div>
    </div>
  );
}

export default Projects;
