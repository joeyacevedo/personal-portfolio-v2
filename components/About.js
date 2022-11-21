import React from 'react';
import Heading from './Heading';
import { useEffect } from 'react';

const About = () => {
  return (
    <section className="container mx-auto py-10 px-4 w-screen">
      <Heading title="About Me" />

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <div className="flex items-center justify-left w-[400px] gap-5">
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
        </div>
      </div>
      <div className="max-w-[800px] text-gray-600">
        <h2 className="font-bold mt-16 mb-2">Introduction:</h2>
        <p>
          Hi, I'm Joey Acevedo. I am currently enrolled in the Full-Time
          Software Engineering program at Fullstack Academy. It's a 17-week
          immersive program based in New York City, centered on full-stack
          JavaScript development, including Node.js, Express, Sequelize ORM for
          PostgreSQL databases, React and Redux; along with HTML, CSS, and CS
          fundamentals.
        </p>
        <br />
        <p>
          Prior to that, I spent 7 years at Citigroup working within Operations,
          Markets/Trading, and the Commercial Bank. I have experience in
          relationship management, business process improvement, and
          communications with internal/external stakeholders.
        </p>
      </div>
    </section>
  );
};

export default About;
