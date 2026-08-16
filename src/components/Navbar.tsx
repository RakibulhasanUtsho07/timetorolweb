"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="w-full bg-gradient-to-r from-[#032e4d] via-[#022138] to-[#011424] text-white shadow-lg border-b border-[#053d66]/30">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between md:justify-start h-24 md:h-28 md:gap-16">
          
          {/* ================= Logo Section (single logo.png image) ================= */}
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

          {/* ================= Desktop Navigation Links ================= */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12 mt-2 text-base md:text-lg font-bold tracking-wider uppercase">
            <Link
              href="/"
              className="text-[#00A3E0] hover:text-sky-300 transition-colors duration-200"
            >
              HOME
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-[#00A3E0] transition-colors duration-200"
            >
              SERVICES
            </Link>
            
            {/* WORK Link Updated for YouTube */}
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
              className="text-white hover:text-[#00A3E0] transition-colors duration-200"
            >
              CONTACT
            </Link>
          </div>

          {/* ================= Mobile Menu Button ================= */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-200 hover:text-white focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ================= Mobile Menu Dropdown ================= */}
      {isOpen && (
        <div className="md:hidden bg-[#011B2E] border-t border-sky-900/50 px-6 py-4 space-y-4 shadow-inner">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block text-[#00A3E0] font-bold tracking-wider uppercase py-1"
          >
            HOME
          </Link>
          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className="block text-white hover:text-[#00A3E0] font-bold tracking-wider uppercase py-1"
          >
            SERVICES
          </Link>
          
          {/* WORK Link Updated for YouTube in Mobile Menu */}
          <Link
            href="https://www.youtube.com/@timetorol"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="block text-white hover:text-[#00A3E0] font-bold tracking-wider uppercase py-1"
          >
            WORK
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-white hover:text-[#00A3E0] font-bold tracking-wider uppercase py-1"
          >
            CONTACT
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;