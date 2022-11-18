import React from 'react';
import Link from 'next/link';
import { FaLinkedinIn, FaGithub } from 'react-icons/Fa';
import { AiOutlineMenu } from 'react-icons/Ai';

const Navbar = () => {
  return (
    <div className="bg-white fixed top-0 w-[100%] z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="text-[24px] text-black">Joseph Acevedo</div>

        <div className="hidden md:flex gap-6">
          <Link
            href="/"
            className="text-[20px] text-black rounded-[5px] gap-2 hover:text-[#0066ff] transition duration-100"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-[20px] text-black rounded-[5px] gap-2 hover:text-[#0066ff] transition duration-100"
          >
            About
          </Link>
          <Link
            href="/portfolio"
            className="text-[20px] text-black rounded-[5px] gap-2 hover:text-[#0066ff] transition duration-100"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="text-[20px] text-black rounded-[5px] gap-2 hover:text-[#0066ff] transition duration-100"
          >
            Contact
          </Link>
        </div>
        <div className="hidden md:flex gap-6">
          <Link
            href="https://www.linkedin.com/in/josephacevedo/"
            className="flex border px-3 py-1 bg-black text-white rounded-[5px] items-center gap-2 hover:text-black hover:bg-white hover:border-black transition duration-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://github.com/joeyacevedo/"
            className="flex border px-3 py-1 bg-black text-white rounded-[5px] items-center gap-2 hover:text-black hover:bg-white hover:border-black transition duration-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </Link>
        </div>
        <div className="md:hidden text-[24px]  text-black rounded-[5px] gap-2 hover:text-[#0066ff]">
          <AiOutlineMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
