import { useState } from 'react';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from "../assets/images/logo.png";

export type Link = {
  href: string;
  title: string;
  base?: string;
};

export default function Navbar({ links, currentBase, callToActionLink, isNormalPage }: { links: Link[]; currentBase: string; callToActionLink: Link; isNormalPage: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid grid-cols-3 gap-x-4 px-16 lg:px-32 pt-4">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="UBC BIOMOD Logo" className="h-12 w-auto" />
        <span className="font-bold text-2xl">UBC BIOMOD</span>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="flex lg:hidden col-start-3 justify-end relative">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="focus:outline-none"
            aria-label="Open menu"
          >
            <FiMenu className="text-2xl" />
          </button>
        )}
        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-0 right-0">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-0 focus:outline-none"
              aria-label="Close menu"
            >
              <FiX className="text-3xl cursor-pointer" />
            </button>
            <nav className="flex flex-col gap-y-6 text-xl font-semibold w-full mt-10 w-56 bg-white bg-opacity-95 z-50 rounded-lg shadow-lg p-6 items-end">
              {links.map((link: Link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:opacity-70 transition duration-300 w-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Navigation Links */}
      <div className={`hidden lg:flex gap-x-12 justify-center items-center`}>
        {links.map((link: Link) => (
          <a
            key={link.href}
            href={link.href}
            className="group dark:text-white text-xl hover:opacity-70 transition duration-300"
          >
            {link.title}
            <div
              className={`max-w-0 group-hover:left-0 group-hover:max-w-full h-[0.2rem] bg-black transition-all duration-300 origin-center relative 
          ${link.base === currentBase ? "left-0 max-w-full" : "left-1/2"}`}
            />
          </a>
        ))}
        {isNormalPage ? (
          <a href={callToActionLink.href} className="block lg:hidden group text-navText font-semibold hover:opacity-70 transition duration-300">
            <span>{callToActionLink.title}</span>
          </a>
        ) : (
          <div>
          </div>
        )}
      </div>
    </div>
  );
}
