import React, { useState } from 'react';
import Block from './Block';
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

function Projects() {
  const [hidden,setHidden] = useState('hidden')
  const [revealed,setRevealed] = useState(false)
  const moreProjects = () => {
    if (hidden === '') {
      setHidden('hidden');
      setRevealed(false);
    }
    else {
      setHidden('');
      setRevealed(true);
    }
  }
  return (
    <div id="projects" className="p-4 scroll-mt-24">
      <p className='text-blue-400 text-5xl text-center m-8 font-raleway mb-20 '>
        <p className='inline-block relative transition-all duration-300 hover:transition-all before:-translate-x-1/2 hover:before:w-full before:absolute before:left-1/2 before:bottom-[-2px] before:w-0 before:h-[2px] before:bg-blue-400 before:transition-all before:duration-500'>
          Projects
        </p>
      </p>
      
      <div className="text-white text-center text-2xl sm:text-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-center p-4 px-24">
    
        <Block href='https://note-cove.vercel.app' name={'Note-Cove'}/>
        <Block href='https://book-trakker.vercel.app' name={'Book Tracker'}/>
        <Block href='https://ltpronounce.vercel.app' name={'Dictionary'}/>
        <Block href='https://weatherwebb.vercel.app' name={'Weather App'}/>
        <Block href='https://movies-finderr.vercel.app' name={'Movies Finder'} />
        <span className='flex justify-center sm:hidden' onClick={moreProjects}>
          <p>
            {revealed ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
              </svg>
            ) : 
            (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
            </svg>)}

          </p>
        </span>
        <Block className={`${hidden} sm:flex`} name={'To-Do App'} />
        <Block className={`${hidden} sm:flex`} name={'Guess the Number'} />
        <Block className={`${hidden} sm:flex`} name={'Password Generator'} />
      </div>
      <div className='font-dancing text-white text-center text-2xl sm:text-3xl'>.....</div>
    </div>
  );
}

export default Projects;
