import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="bg-white fixed top-0 z-10 w-screen border-black border-b-4">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="hidden md:flex gap-6">
          <Link href="/" className="navLink">
            Home
          </Link>
          <a href="#about" className="navLink">
            About
          </a>
        </div>
        <div className="hidden md:flex gap-6">
          <Link
            href="https://www.linkedin.com/in/josephacevedo/"
            className="flex border px-5 py-2 bg-black text-white rounded-[5px] items-center gap-2 hover:text-[#0066ff] hover:bg-white hover:border-[#0066ff] transition duration-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={25} />
          </Link>
          <Link
            href="https://github.com/joeyacevedo/"
            className="flex border px-5 py-2 bg-black text-white rounded-[5px] items-center gap-2 hover:text-[#0066ff] hover:bg-white hover:border-[#0066ff] transition duration-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={25} />
          </Link>
        </div>
        <div
          className="md:hidden text-[24px]  text-black rounded-[5px] gap-2 hover:text-[#0066ff]"
          onClick={toggleSidebar}
        >
          <AiOutlineMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
