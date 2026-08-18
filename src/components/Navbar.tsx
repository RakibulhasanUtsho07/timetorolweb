"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ১. নতুন ইমপোর্ট

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname(); // ২. বর্তমান পাথ ট্র্যাক করার জন্য

  // ৩. একটি হেল্পার ফাংশন যা চেক করবে লিঙ্কটি active কিনা
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="w-full bg-gradient-to-r from-[#032e4d] via-[#022138] to-[#011424] text-white shadow-lg border-b border-[#053d66]/30">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between md:justify-start h-24 md:h-28 md:gap-16">
          
          <Link href="/" className=" shrink-0 group select-none">
            <Image
              src="/logo.png"
              alt="Work To Rol"
              width={300}
              height={100}
              priority
              className="mt-4 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12 mt-2 text-base md:text-lg font-bold tracking-wider uppercase">
            <Link
              href="/"
              className={`transition-colors duration-200 ${isActive("/") ? "text-[#00A3E0]" : "text-white hover:text-[#00A3E0]"}`}
            >
              HOME
            </Link>
            <Link
              href="/services"
              className={`transition-colors duration-200 ${isActive("/services") ? "text-[#00A3E0]" : "text-white hover:text-[#00A3E0]"}`}
            >
              SERVICES
            </Link>
            
            {/* YouTube Link - এটি সবসময় সাদা থাকবে কারণ এটি এক্সটারনাল লিঙ্ক */}
            <Link
              href="https://www.youtube.com/@timetorol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#00A3E0] transition-colors duration-200"
            >
              WORK
            </Link>
            
            <Link
              href="/contact"
              className={`transition-colors duration-200 ${isActive("/contact") ? "text-[#00A3E0]" : "text-white hover:text-[#00A3E0]"}`}
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-white focus:outline-none p-2"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#011B2E] border-t border-sky-900/50 px-6 py-4 space-y-4 shadow-inner">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`block font-bold tracking-wider uppercase py-1 ${isActive("/") ? "text-[#00A3E0]" : "text-white"}`}
          >
            HOME
          </Link>
          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className={`block font-bold tracking-wider uppercase py-1 ${isActive("/services") ? "text-[#00A3E0]" : "text-white"}`}
          >
            SERVICES
          </Link>
          <Link
            href="https://www.youtube.com/@timetorol"
            target="_blank"
            onClick={() => setIsOpen(false)}
            className="block text-white hover:text-[#00A3E0] font-bold tracking-wider uppercase py-1"
          >
            WORK
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`block font-bold tracking-wider uppercase py-1 ${isActive("/contact") ? "text-[#00A3E0]" : "text-white"}`}
          >
            CONTACT
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;