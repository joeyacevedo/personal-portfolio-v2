import React from 'react';
import { RiCloseFill } from 'react-icons/ri';
import Link from 'next/link';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`w-screen h-screen ${
        isOpen ? 'fixed' : 'hidden'
      } top-0 left-0 bg-black bg-opacity-75 text-white grid place-items-center`}
    >
      <div
        className="absolute mt-[15rem] text-[24px] hover:cursor-pointer hover:text-blue-700"
        onClick={toggleSidebar}
      >
        <p className="flex justify-center place-items-center align-text-bottom">
          <RiCloseFill />
        </p>
      </div>

      <div className="flex flex-col gap-4 text-[28px]">
        <Link className="hover:text-blue-700" href="#">
          Home
        </Link>
        <Link className="hover:text-blue-700" href="#about">
          About
        </Link>
        <Link className="hover:text-blue-700" href="#project">
          Portfolio
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
