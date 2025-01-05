import React from 'react';

function Home() {
  return (
    <div id="home" className="flex flex-col lg:flex-row items-center justify-center p-4">
      <img
        className="
        shadow-blue-400 shadow-all-sides hover:shadow-xl hover:shadow-blue-400 transition
        duration-100 w-[300px] lg:w-[500px] m-8 lg:m-24 rounded-md  hover:filter hover:grayscale hover:rotate-6 hover:transition"
        src="https://images.unsplash.com/photo-1733914359713-e9c8c70b15c9?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      
      <div className="text-center lg:text-left text-4xl lg:text-5xl">
        <p className="flex flex-wrap justify-center items-center lg:justify-start text-white">
          Aspiring&nbsp;
          <span className="text-yellow-300 text-5xl lg:text-6xl hover:text-yellow-400 hover:animate-pulse">
            
          Web Developer
          </span>
        </p>
      </div>
      <div className='font-dancing text-white text-2xl sm:text-3xl md:hidden'>.....</div>
    
    </div>
  );
}

export default Home;
