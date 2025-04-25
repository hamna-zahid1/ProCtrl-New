import React from "react";
import { FaArrowRight } from "react-icons/fa";
import keyboard from "@/assets/images/cat-Keyboard.jpg";
import mouse from "@/assets/images/cat-Mouse.jpg";
import headphones from "@/assets/images/cat-Headphones.jpg";
import controller from "@/assets/images/cat-controller.jpg";
import vortexReaper from "@/assets/images/vortexReaper.webp";
import quantumPro from "@/assets/images/quantumPro.webp";

const categories = [
    { name: "Keyboards", img: keyboard },
    { name: "Gaming Mouse", img: mouse },
    { name: "Headphones", img: headphones },
    { name: "Gaming Controllers", img: controller }
  ];

  const categories2 = [
    { name: "Vortex Reaper", des: "Unparalleled Precision and Control for the Ultimate Gaming Edge", 
      img: vortexReaper },
    { name: "Quantum Pro", des: "The Quantum Pro Redefines Immersive Gaming Audio",
      img: quantumPro },
  ];
  
  const CategoriesSection = () => {
    return (
      <section className="bg-dark-primary text-white pt-12 mt-16">
        <div className="max-w-7xl mx-auto ">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-center mb-8 pb-6">
            CATEGORIES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden h-[250px] cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${category.img})` }}
                />
                <div className="absolute bottom-0 left-0 p-6 z-10">
                  <h3 className="text-lg font-bold font-orbitron mb-2">{category.name}</h3>
                  <a
                    href="#"
                    className="text-pink-500 font-semibold inline-flex items-center gap-1"
                  >
                    Shop Now <FaArrowRight className="text-xs mt-0.5" />
                  </a>
                </div>
                {/* Overlay for better text readability */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-30 z-0" /> */}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-[150px]">
          {/* <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-center mb-8 pb-6">
            CATEGORIES
          </h2> */}
          <div className="grid grid-cols-2 gap-6">
            {categories2.map((category, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden h-[400px] cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${category.img})` }}
                />
                <div className="absolute bottom-0 left-0 p-6 z-10">
                  <h3 className="text-[30px] font-bold font-orbitron mb-5">{category.name}</h3>
                  <p className="text-sm mb-4">{category.des}</p>
                  {/* <p className="text-sm mb-2">{category.des}</p> */}
                  <a
                    href="#"
                    className="text-pink-500 font-semibold inline-flex items-center gap-1"
                  >
                    Shop Now <FaArrowRight className="text-xs mt-0.5" />
                  </a>
                </div>
                {/* Overlay for better text readability */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-30 z-0" /> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default CategoriesSection;