"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Clapperboard,
  Drone,
  Film,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  slug: string;
  titleImage: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Cinematography",
    titleImage: "/cinemotography.png",
    slug: "cinematography",
    description:
      "We don’t just record footage, we craft visual stories. We elevate your brand with an international-standard aesthetic.",
    image: "/rolcam.jpeg",
    icon: <Camera size={21} />,
  },

  {
    id: 2,
    title: "Dronegraphy",
    titleImage: "/dronegraphy.png",
    slug: "dronegraphy",
    description:
      "Elevate your perspective with breathtaking 4K aerial visuals. We capture the world from angles that demand attention.",
    image: "/dronegraphy.jpeg",
    icon: <Drone size={21} />,
  },

  {
    id: 3,
    title: "Video Editing",
    titleImage: "/videoediting.png",
    slug: "videoediting",
    description:
      "From Cinematic Color Grading to Text Animation, SaaS & UI Animations. We turn static ideas into high-converting motion art.",
    image: "/videoediting.jpeg",
    icon: <Film size={21} />,
  },

  {
    id: 4,
    title: "OVC Commercial",
    titleImage: "/ovc.png",
    slug: "ovc-commercial",
    description:
      "We engineer high-converting Online Video Commercials (OVC) that capture attention in seconds and turn passive viewers into paying clients.",
    image: "/ovccommercial.jpeg",
    icon: <Clapperboard size={21} />,
  },
];

/* =========================================================
   BACKGROUND IMAGES
========================================================= */

const backgroundImages = [
  "/1786565811187.png",
  "/1786541020775.jpg.jpeg",
  "/1786540959939.jpg.jpeg",
];

/* =========================================================
   SERVICES SECTION
========================================================= */

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="
        relative
        isolate
        w-full
        overflow-hidden
        bg-[#011e32]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
         BACKGROUND IMAGE LAYER
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Main Dark Overlay */}
        <div className="absolute inset-0 bg-[#011e32]/85" />

        {/* Center Blue Glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[850px]
            w-[1100px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#006da8]/15
            blur-[150px]
          "
        />

        {/* Top Glow */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[400px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-[#0b8dcc]/10
            blur-[130px]
          "
        />
      </div>

      {/* =====================================================
         MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1180px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div
          className="
            mx-auto
            mb-12
            max-w-[760px]
            text-center
            sm:mb-14
            lg:mb-16
          "
        >
          {/* Badge */}
          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-1.5
              rounded-full
              border
              border-sky-400/25
              bg-sky-400/[0.07]
              px-4
              py-1.5
              text-[11px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-sky-300
              backdrop-blur-sm
            "
          >
            {/* Icon */}
            <span className="relative flex items-center justify-center w-5 h-5 overflow-hidden shrink-0">
              <Image
                src="/timetorolpng.png"
                alt=""
                fill
                sizes="20px"
                className="object-contain scale-150"
              />
            </span>
            Our Services
          </div>

          {/* Heading */}
          <h2
            className="
              text-[34px]
              font-extrabold
              leading-[1.08]
              tracking-[-1px]
              text-white
              sm:text-[42px]
              md:text-[48px]
              lg:text-[52px]
            "
          >
            We Turn Ideas Into{" "}
            <span className="text-[#72ccff]">Visual Stories.</span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-4
              max-w-[680px]
              text-[15px]
              leading-7
              text-slate-300
              sm:text-[16px]
              md:text-[17px]
            "
          >
            From cinematic production to high-converting commercial content,
            we create visuals that make your brand impossible to ignore.
          </p>
        </div>

        {/* ===================================================
            FIRST ROW — 3 CARDS
        ==================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* ===================================================
            OVC CARD — CENTER
        ==================================================== */}

        <div className="mt-5 flex justify-center">
          <div className="w-full sm:max-w-[calc(50%-10px)] lg:max-w-[calc(33.333%-13px)]">
            <ServiceCard service={services[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   SERVICE CARD
========================================================= */

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <article
      className="
        group
        relative
        flex
        flex-col
        overflow-hidden
        rounded-[26px]
        border
        border-sky-100/30
        bg-[#bce7fb]
        p-2.5
        shadow-[0_15px_50px_rgba(0,0,0,0.20)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-sky-100/60
        hover:shadow-[0_25px_65px_rgba(0,150,220,0.22)]
      "
    >
      {/* ===================================================
         IMAGE
      ==================================================== */}

      <div
        className="
          relative
          aspect-[16/9]
          w-full
          overflow-hidden
          rounded-[20px]
          bg-[#07547a]
        "
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.05]
          "
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Image Overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-[#043f5d]/25
            via-transparent
            to-white/[0.04]
          "
        />

        {/* Icon */}
        <div
          className="
            absolute
            bottom-3
            left-3
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-white/30
            bg-[#00699b]/75
            text-white
            shadow-[0_5px_20px_rgba(0,0,0,0.25)]
            backdrop-blur-md
            transition-all
            duration-300
            group-hover:bg-[#0088cc]
            group-hover:shadow-[0_0_20px_rgba(0,136,204,0.45)]
          "
        >
          {service.icon}
        </div>
      </div>

      {/* ===================================================
         CONTENT (Updated: Text Title instead of Image)
      ==================================================== */}

      <div
        className="
          flex
          flex-1
          flex-col
          items-center
          pt-4
          pb-2
          text-center
          px-2
        "
      >
        {/* Title Text (Replaced Image) */}
        <h3 className="mb-2.5 text-[20px] font-extrabold tracking-tight text-[#00699b] sm:text-[22px]">
          {service.title}
        </h3>

        {/* Description */}
        <p
          className="
            mx-auto
            max-w-[315px]
            text-[14px]
            font-medium
            leading-snug
            text-[#173d52]
            sm:text-[14.5px]
          "
        >
          {service.description}
        </p>
      </div>
    </article>
  );
};

export default Services;