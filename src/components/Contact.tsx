import React from 'react';
import Link from 'next/link';
import { Mail, Phone,  } from 'lucide-react';
import { BsInstagram, BsYoutube } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { LiaLinkedin } from 'react-icons/lia';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#011e32] py-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
        
        {/* Left: Contact Info */}
        <div className="flex flex-col gap-3 text-white/90">
          <div className="flex items-center gap-3">
            <div className="bg-[#0077b6] p-1.5 rounded-full">
              <Phone size={16} fill="white" />
            </div>
            <span className="font-medium tracking-wide">+880 1324211913</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#0077b6] p-1.5 rounded-full">
              <Mail size={16} />
            </div>
            <span className="font-medium tracking-wide">businesswithtawhid@gmail.com</span>
          </div>
        </div>

        {/* Center: Brand Logo/Name */}
          <Link href="/" className="flex flex-col shrink-0 group select-none">
                   {/* Main Logo Text with BIGGER Image */}
                   <div className="flex items-center font-sans font-bold text-[2.5rem] md:text-[3.25rem] tracking-tight leading-none">
                     <span className="text-white lg:-mr-4">work t</span>
                     
                     {/* Aperture Logo Icon - zoomed + zero margin so it sits flush like a letter, no gap */}
                     <span className="relative flex justify-center items-center w-14 h-14 md:w-20 md:h-20 mx-0 shrink-0 overflow-hidden">
                       <Image
                         src="/timetorolpng.png"
                         alt="Time To Rol Icon"
                         fill
                         sizes="(max-width: 768px) 56px, 80px"
                         className="object-contain scale-150 my-auto" // scale-150 zooms in to remove the empty space baked into the PNG
                         priority
                       />
                     </span>
                     
                     <span className="text-[#00A3E0] lg:-ml-7">rol</span>
                   </div>
                   
                   {/* Tagline text - Aligned under the text properly */}
                   <div className="text-xs md:text-[14px] font-medium tracking-wider lg:-mt-5 md:mt-0 pl-[60px] md:pl-[85px]">
                     <span className="text-[#00A3E0]">Grow </span>
                     <span className="text-gray-200">Your Brand</span>
                   </div>
                 </Link>
       

        {/* Right: Social Icons */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <span className="text-white font-semibold text-sm">Find Us On</span>
          <div className="flex items-center gap-3">
            <Link href="https://youtube.com/@timetorol" className="bg-[#0077b6] p-2 rounded-lg hover:bg-[#005f90] transition-colors">
              <BsYoutube size={20} className="text-white" />
            </Link>
            <Link href="https://www.facebook.com/share/1b9s9mPZEm/" className="bg-[#0077b6] p-2 rounded-lg hover:bg-[#005f90] transition-colors">
              <FaFacebook size={20} className="text-white" />
            </Link>
            <Link href="https://www.instagram.com/timetorol" className="bg-[#0077b6] p-2 rounded-lg hover:bg-[#005f90] transition-colors">
              <BsInstagram size={20} className="text-white" />
            </Link>
            <Link href="#" className="bg-[#0077b6] p-2 rounded-lg hover:bg-[#005f90] transition-colors">
              <LiaLinkedin size={20} className="text-white" />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;