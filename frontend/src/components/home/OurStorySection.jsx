import { FaPlay, FaArrowRight } from "react-icons/fa";
import bnvideo from "@/assets/images/bn-video.jpg";

const OurStorySection = () => {
  return (
    <section className="mx-auto flex flex-col justify-between md:flex-row gap-8 h-auto bg-dark-primary px-4 py-8 mt-10">
      {/* Left: Image with Play Button - wider */}
      <div className="relative flex-[1.8] rounded-[25px] overflow-hidden h-[350px]">
        <img
          src={bnvideo}
          alt="Gaming Gear"
          className="w-full h-full object-cover"
        />
        <button className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white text-pink-600 w-16 h-16 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition">
            <FaPlay className="text-xl" />
          </div>
        </button>
      </div>

      {/* Right: Text Section - narrower */}
      <div className="flex-[1] rounded-[25px] p-8 bg-gradient-to-br from-[#3b82f6] via-[#a855f7] to-[#ec4899] text-white">
        <h2 className="text-3xl md:text-4xl font-bold mt-8 mb-6 font-orbitron">Our Story</h2>
        <p className="text-base md:text-md leading-relaxed mb-6">
          Driven by gaming passion, we craft the finest gear to empower players.
          Our unwavering innovation and user focus make us an integral part of
          the global gaming community.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-white font-semibold hover:underline"
        >
          Read More <FaArrowRight className="text-sm" />
        </a>
      </div>
    </section>
  );
};

export default OurStorySection;
