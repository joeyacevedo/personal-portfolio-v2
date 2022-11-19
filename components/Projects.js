import React from 'react';
import Heading from './Heading';
import Image from 'next/image';

const Projects = () => {
  return (
    <section className="container mx-auto py-10 px-4">
      <Heading title="Projects" />

      <div className="grid grid-col-3 gap-4">
        <div className="row-span-5 relative group">
          <Image
            src="/images/CinnamonGraceshopperBanner.png"
            alt="image"
            width={500}
            height={100}
          />

          <div className="bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place_items-center text-white">
            Test
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
