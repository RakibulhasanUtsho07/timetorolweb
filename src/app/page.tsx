import Footer from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <Footer />
      
      {/* Developed By Section */}
      <div className="w-full bg-[#011e32] py-4 text-center border-t border-white/10">
        <p className="text-sm text-white/70 font-medium tracking-wide">
          Developed by{" "}
          <a 
            href="https://pixelandcode.agency" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#00A3E0] font-bold hover:underline transition-all"
          >
            Pixal & Code
          </a>
        </p>
      </div>
    </div>
  );
}