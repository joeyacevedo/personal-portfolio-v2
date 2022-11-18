import React from 'react';
import TypeWriter from 'typewriter-effect';
import { AiOutlineMail, AiOutlineArrowRight } from 'react-icons/Ai';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='bg-[url("/images/hero.jpg")] h-screen bg-cover bg-center bg-fixed flex items-center'>
      <div className="container mx-auto px-4">
        <div
          className="max-w-[450px] border bg-black bg-opacity-60 items-left rounded-[10px] text-white flex flex-col
        gap-[40px]"
        >
          <div className="p-5">
            <div className="flex items-center gap-12">
              <h1 className="text-5xl">
                <p>{`Hi I'm Joey `}</p>
              </h1>
              <Image
                src="/images/profile.png"
                alt="profile pic"
                width={120}
                height={120}
                className="rounded-[30px] px-1"
              />
            </div>

            <br />
            <div className="bg-white h-[3px] w-[40px]"></div>
            <br />
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
