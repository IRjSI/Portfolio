import React from 'react';

function Home() {
  return (
    <div id="home" className="flex flex-col lg:flex-row items-center justify-center p-4">
      {/* Image */}
      <img
        className="w-[300px] lg:w-[500px] m-8 lg:m-24 rounded-md"
        src="https://images.unsplash.com/photo-1733914359713-e9c8c70b15c9?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Developer Inspiration"
      />
      
      {/* Text Section */}
      <div className="text-center lg:text-left text-4xl lg:text-5xl">
        <p className="flex flex-wrap justify-center lg:justify-start text-white">
          I am an aspiring&nbsp;
          <span className="text-yellow-300 font-dancing text-5xl lg:text-6xl hover:text-yellow-400">
            Web Developer
          </span>
        </p>
      </div>
      <div className="md:hidden text-white text-xl md:text-3xl text-center flex flex-col justify-center px-4">
          <p>.....</p>
      </div>
    </div>
  );
}

export default Home;
