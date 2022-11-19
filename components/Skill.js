import React from 'react';
import Heading from './Heading';

const Skill = () => {
  return (
    <section className="container mx-auto py-10 px-4">
      <Heading title="Languages and Technologies" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p>Javascript</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#0066ff] absolute h-[4px] w-[95%]"></div>
          </div>
        </div>

        <div>
          <p>React.js</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#0066ff] absolute h-[4px] w-[85%]"></div>
          </div>
        </div>

        <div>
          <p>Sequelize</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#0066ff] absolute h-[4px] w-[85%]"></div>
          </div>
        </div>

        <div>
          <p>Node.js</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#0066ff] absolute h-[4px] w-[85%]"></div>
          </div>
        </div>

        <div>
          <p>Express</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#0066ff] absolute h-[4px] w-[90%]"></div>
          </div>
        </div>

        <div>
          <p>Next.js</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#0066ff] absolute h-[4px] w-[50%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
