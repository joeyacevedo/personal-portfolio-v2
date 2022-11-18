import React from 'react';
import TypeWriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className='bg-[url("/images/hero.jpg")] h-screen bg-cover bg-center bg-fixed flex items-center'>
      <div className="container mx-auto px-4">
        <div
          className="max-w-[450px] border bg-black bg-opacity-75 items-left rounded-[10px] text-white flex flex-col
        gap-[40px]"
        >
          <div className="p-5">
            <h1 className="text-5xl">I'm Joey</h1>
            <h4 className="text-2xl mt-3 mr-3">
              <TypeWriter
                options={{
                  strings: [
                    " I'm a Fullstack Developer.",
                    " I'm a New Yorker.",
                    " I'm open to new opportunities.",
                  ],
                  changeDelay: 3,
                  changeDeleteSpeed: 2,
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
