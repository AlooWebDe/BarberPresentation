import React from "react";
import hero from "../../../assets/2149141746.jpg";
import { AiOutlineScissor } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import Contact from "../Contact/Contact";
export default function NewsLetter() {
  return (
    <>
      <section
        className="relative inset-0 bg-cover bg-fixed bg-center bg-no-repeat py-20 px-10"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/80 dark:to-gray-950/90"
          style={{ transition: "opacity 0.5s ease-out", willChange: "opacity" }}
        />
        <div className="relative z-10 container flex flex-col lg:flex-row justify-around items-center mx-auto gap-10">
          <div className="space-y-6 text-white text-center lg:text-left leading-8">
            <div className="flex justify-center lg:justify-start gap-1">
              <FaStar className="text-yellow-500 text-xl" />
              <FaStar className="text-yellow-500 text-xl" />
              <FaStar className="text-yellow-500 text-xl" />
              <FaStar className="text-yellow-500 text-xl" />
              <FaStar className="text-yellow-500 text-xl" />
            </div>
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-3xl max-w-[550px]">
              We Are Best Barbers & Hair Cutting Salon at NYC.
            </h1>
            <div className="flex items-center justify-center lg:justify-start gap-6">
              <div>
                <AiOutlineScissor className="text-6xl" />
              </div>
              <div className="text-xl">
                <p className="font-bold text-stone-400">Appointment</p>
                <a href="#">855 100 4444</a>
              </div>
            </div>
          </div>
          <div>
            <Contact />
          </div>
        </div>
      </section>
    </>
  );
}
