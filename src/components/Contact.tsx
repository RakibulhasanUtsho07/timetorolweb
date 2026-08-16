import React from 'react';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { BsInstagram, BsYoutube } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { LiaLinkedin } from 'react-icons/lia';
import Image from 'next/image';

const FooterAndFounder: React.FC = () => {
  return (
    <section className="w-full bg-[#011e32] relative pt-24">
      
      {/* ===================================================
          FOUNDER CARD SECTION
      ==================================================== */}
      <div className="max-w-[1200px] mx-auto px-6 mb-20 flex justify-center">
        <article
          className="
            group
            relative
            w-full
            max-w-[340px]
            overflow-visible
            rounded-[20px]
            bg-[#cbf0ff] /* Light blue outer background */
            p-4
            pb-5
            shadow-[0_20px_45px_-10px_rgba(1,20,36,0.45)]
            transition-transform
            duration-500
            hover:-translate-y-2
          "
        >
          {/* INNER DARK BLUE BOX FOR IMAGE */}
          <div 
            className="
              relative 
              w-full 
              h-[280px] 
              bg-[#124f6e] /* Dark blue inner background */
              rounded-[12px] 
              flex 
              justify-center 
              items-end
              overflow-visible
            "
          >
            {/* FOUNDER IMAGE */}
            <div
              className="
                absolute
                bottom-0
                w-[90%]
                h-[320px] /* Height is larger to make the head pop out */
                flex
                justify-center
              "
            >
              <Image
                src="/tawhid.png"
                alt="Md Tawhid"
                fill
                priority
                className="
                  object-contain
                  object-bottom
                  drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)]
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.03]
                "
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* FOUNDER CONTENT */}
          <div className="flex flex-col items-center justify-center text-center pt-4">
            <h3 className="text-[26px] font-extrabold leading-tight tracking-tight text-[#0077b6]">
              Md Tawhid
            </h3>
            <p className="mt-1 flex items-center gap-1.5 text-[15px] text-[#2c3e50]">
              <span className="font-semibold text-[#1a252f]">Founder</span>
              <span className="font-medium">timetorol.com</span>
            </p>
          </div>
        </article>
      </div>

      {/* ===================================================
          FOOTER SECTION (বর্ডার মুছে দেওয়া হয়েছে)
      ==================================================== */}
      <footer className="w-full py-12 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
          
          {/* Left: Contact Info */}
          <div className="flex flex-col gap-3 text-white/90">
            <div className="flex items-center gap-3">
              <div className="bg-[#0077b6] p-2 rounded-full shadow-md">
                <Phone size={16} className="text-white" />
              </div>
              <span className="font-medium tracking-wide">+880 1324211913</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#0077b6] p-2 rounded-full shadow-md">
                <Mail size={16} className="text-white" />
              </div>
              <span className="font-medium tracking-wide">businesswithtawhid@gmail.com</span>
            </div>
          </div>

          {/* Center: Brand Logo/Name */}
          <Link href="/" className="shrink-0 group select-none">
            <Image
              src="/logo.png"
              alt="Work To Rol"
              width={260}
              height={90}
              priority
              className="object-contain"
            />
          </Link>

          {/* Right: Social Icons */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <span className="text-white font-semibold text-sm">Find Us On</span>
            <div className="flex items-center gap-3">
              <Link href="https://youtube.com/@timetorol" className="bg-[#0077b6] p-2.5 rounded-xl hover:bg-[#005f90] transition-all shadow-md">
                <BsYoutube size={18} className="text-white" />
              </Link>
              <Link href="https://www.facebook.com/share/1b9s9mPZEm/" className="bg-[#0077b6] p-2.5 rounded-xl hover:bg-[#005f90] transition-all shadow-md">
                <FaFacebook size={18} className="text-white" />
              </Link>
              <Link href="https://www.instagram.com/timetorol" className="bg-[#0077b6] p-2.5 rounded-xl hover:bg-[#005f90] transition-all shadow-md">
                <BsInstagram size={18} className="text-white" />
              </Link>
              <Link href="https://www.linkedin.com/company/timetorol" className="bg-[#0077b6] p-2.5 rounded-xl hover:bg-[#005f90] transition-all shadow-md">
                <LiaLinkedin size={18} className="text-white" />
              </Link>
            </div>
          </div>

        </div>
      </footer>
    </section>
  );
};

export default FooterAndFounder;