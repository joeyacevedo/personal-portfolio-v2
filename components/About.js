import React from 'react';
import Heading from './Heading';
import { useEffect } from 'react';

const About = () => {
  return (
    <section className="container mx-auto py-10 px-4 w-screen">
      <Heading title="About Me" />

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <div className="flex items-center justify-left w-[300x] gap-5">
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-center font-medium">
                Industry
              </div>
              <div className="flex gap-4 items-center font-medium">
                University
              </div>
              <div className="flex gap-4 items-center font-medium">
                Bootcamp
              </div>
              <div className="flex gap-4 items-center font-medium">Website</div>
              <div className="flex gap-4 items-center font-medium">
                Location
              </div>
            </div>
            <div className="flex flex-col gap-6 text-black">
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
            </div>
            <div className="flex flex-col gap-6 text-gray-600">
              <div>Software Development</div>
              <div>University of Florida</div>
              <div>Fullstack Academy</div>
              <div>www.josephacevedo.com</div>
              <div>New York City</div>
            </div>
          </div>

          <div className="max-w-[800px]">
            <h2 className="font-bold mt-16 mb-2">More about me:</h2>
            <p className="text-gray-600">placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
