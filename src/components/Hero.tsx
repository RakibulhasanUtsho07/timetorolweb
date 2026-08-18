"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  // লেফট, সেন্টার এবং রাইট ইমেজের হোভার স্টেট ট্র্যাক করার জন্য
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isCenterHovered, setIsCenterHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);

  // ক্লিক করলে একই পেজে ভিডিও দেখানোর জন্য Modal স্টেট
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#011e32] text-white">
        {/* =========================================
           BACKGROUND
        ========================================== */}
        <div className="pointer-events-none absolute inset-0 z-0">
          {/* Main center glow */}
          <div
            className="
              absolute
              left-1/2
              top-[38%]
              h-[520px]
              w-[850px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#07375c]/60
              blur-[110px]
            "
          />

          {/* Radial background */}
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(ellipse_at_center,_rgba(7,55,92,0.65)_0%,_rgba(1,30,50,0.88)_48%,_rgba(1,30,50,1)_100%)]
            "
          />
        </div>

        {/* =========================================
           MAIN CONTAINER
        ========================================== */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            w-full
            max-w-[1200px]
            flex-col
            items-center
            px-4
            pb-16
            pt-14
            text-center
            sm:pb-20
            sm:pt-16
            md:pb-24
            md:pt-[68px]
          "
        >
          {/* =========================================
              HERO TITLE
          ========================================== */}
          <h1
            className="
              max-w-[1050px]
              text-[36px]
              font-extrabold
              leading-[1.08]
              tracking-[-1.5px]
              text-white
              drop-shadow-[0_0_20px_rgba(255,255,255,0.22)]
              sm:text-[44px]
              md:text-[52px]
              lg:text-[56px]
            "
          >
            From Concept to color
            <br className="hidden sm:block" />
            grade, From Ground to Sky.
          </h1>

          {/* =========================================
              SUBTITLE
          ========================================== */}
          <p
            className="
              mt-4
              text-[17px]
              font-medium
              tracking-wide
              text-gray-100
              drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]
              sm:text-[18px]
              md:mt-3
              md:text-[20px]
            "
          >
            We Craft Visuals That ElevateYour Brand.
          </p>

          {/* =========================================
              BUTTONS
          ========================================== */}
          <div
            className="
              mt-7
              flex
              items-center
              justify-center
              gap-3
              sm:gap-4
              md:mt-6
            "
          >
            {/* BOOK NOW */}
            <Link
              href="/contact"
              className="
                rounded-[10px]
                border-[1.5px]
                border-[#0077b6]
                bg-transparent
                px-5
                py-2.5
                text-[15px]
                font-extrabold
                text-white
                transition-all
                duration-300
                hover:bg-[#0077b6]/15
                hover:shadow-[0_0_20px_rgba(0,119,182,0.3)]
                sm:px-6
                md:px-7
                md:py-3
                md:text-[16px]
              "
            >
              Book <span className="text-[#9edbff]">Now</span>
            </Link>

            {/* RECENT WORK */}
            <Link
              href="https://www.youtube.com/@timetorol"
              target="_blank"
              className="
                rounded-[10px]
                bg-[#0088cc]
                px-5
                py-2.5
                text-[14px]
                font-black
                uppercase
                tracking-wide
                text-white
                shadow-[0_0_22px_rgba(0,136,204,0.35)]
                transition-all
                duration-300
                hover:bg-[#0099e6]
                hover:shadow-[0_0_30px_rgba(0,153,230,0.5)]
                sm:px-6
                md:px-7
                md:py-3
                md:text-[15px]
              "
            >
              Recent Work
            </Link>
          </div>

          {/* =========================================
              IMAGE SHOWCASE
          ========================================== */}
          <div
            className="
              mt-9
              flex
              w-full
              max-w-[930px]
              items-center
              justify-center
              px-1
              sm:mt-11
              md:mt-[34px]
            "
          >
            {/* =====================================
                LEFT IMAGE (YOUTUBE HOVER & CLICK)
            ====================================== */}
            <div
              onClick={() => setActiveVideoId("BnOmZ1a7Kuw")}
              onMouseEnter={() => setIsLeftHovered(true)}
              onMouseLeave={() => setIsLeftHovered(false)}
              className="
                group
                relative
                z-0
                block
                w-[29%]
                cursor-pointer
                aspect-[16/9]
                overflow-hidden
                rounded-[14px]
                border-[1.5px]
                border-sky-300/80
                bg-[#011e32]
                shadow-[0_0_35px_rgba(0,163,224,0.32)]
                sm:rounded-[17px]
                sm:border-[2px]
                md:rounded-[20px]
              "
            >
              {!isLeftHovered ? (
                <Image
                  src="/kacchi.png"
                  alt="University Project"
                  fill
                  priority
                  className="
                    object-cover
                    scale-[1.05]
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-[1.14]
                  "
                  sizes="(max-width: 768px) 29vw, 270px"
                />
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/BnOmZ1a7Kuw?autoplay=1&mute=1&loop=1&playlist=BnOmZ1a7Kuw&controls=0"
                  title="YouTube video player"
                  className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
              
              {/* Subtle overlay */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#011e32]/10
                  via-transparent
                  to-white/[0.03]
                "
              />
            </div>

            {/* =====================================
                CENTER IMAGE (YOUTUBE HOVER & CLICK)
            ====================================== */}
            <div
              onClick={() => setActiveVideoId("WDMvyTWzsrg")}
              onMouseEnter={() => setIsCenterHovered(true)}
              onMouseLeave={() => setIsCenterHovered(false)}
              className="
                group
                relative
                z-20
                mx-[10px]
                block
                w-[42%]
                cursor-pointer
                aspect-[16/9]
                overflow-hidden
                rounded-[17px]
                border-[1.5px]
                border-sky-300/80
                bg-[#011e32]
                shadow-[0_0_35px_rgba(0,163,224,0.40)]
                sm:mx-[14px]
                sm:rounded-[20px]
                md:mx-[16px]
                md:rounded-[22px]
                md:border-[2px]
              "
            >
              {!isCenterHovered ? (
                <Image
                  src="/university.jpeg"
                  alt="Main Project Showcase"
                  fill
                  priority
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-[1.03]
                  "
                  sizes="(max-width: 768px) 42vw, 390px"
                />
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/WDMvyTWzsrg?autoplay=1&mute=1&loop=1&playlist=WDMvyTWzsrg&controls=0"
                  title="YouTube video player"
                  className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#011e32]/10
                  via-transparent
                  to-white/[0.03]
                "
              />
            </div>

            {/* =====================================
                RIGHT IMAGE (YOUTUBE HOVER & CLICK)
            ====================================== */}
            <div
              onClick={() => setActiveVideoId("TI9lZZ5eNvQ")}
              onMouseEnter={() => setIsRightHovered(true)}
              onMouseLeave={() => setIsRightHovered(false)}
              className="
                group
                relative
                z-0
                block
                w-[29%]
                cursor-pointer
                aspect-[16/9]
                overflow-hidden
                rounded-[14px]
                border
                border-sky-300/80
                bg-[#011e32]
                shadow-[0_0_35px_rgba(0,163,224,0.32)]
                sm:rounded-[17px]
                md:rounded-[20px]
              "
            >
              {!isRightHovered ? (
                <Image
                  src="/1786484217502.png"
                  alt="Setup Project"
                  fill
                  priority
                  className="
                    object-cover
                    scale-[1.06]
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-[1.12]
                  "
                  sizes="(max-width: 768px) 29vw, 270px"
                />
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/TI9lZZ5eNvQ?autoplay=1&mute=1&loop=1&playlist=TI9lZZ5eNvQ&controls=0"
                  title="YouTube video player"
                  className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}

              {/* Subtle overlay */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#011e32]/10
                  via-transparent
                  to-white/[0.03]
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          VIDEO MODAL (POPUP)
      ========================================== */}
      {activeVideoId && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm transition-opacity"
          onClick={() => setActiveVideoId(null)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video rounded-xl bg-black shadow-[0_0_40px_rgba(0,163,224,0.3)]"
            onClick={(e) => e.stopPropagation()} // Stop click from closing modal when clicking inside the video box
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveVideoId(null)}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/30 sm:-right-12 sm:-top-0"
              aria-label="Close Video"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* YouTube Iframe for Modal */}
            <iframe
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
              title="YouTube video player"
              className="h-full w-full rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;