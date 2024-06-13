import React from "react";
import hero from "../../../assets/20978.jpg";
import { CiPlay1 } from "react-icons/ci";
export default function PromoVideo() {
  return (
    <>
      <section
        className="py-36 relative bg-cover bg-fixed bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-950/90 dark:to-gray-950/90"
          style={{ transition: "opacity 0.5s ease-out", willChange: "opacity" }}
        />
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 relative z-10 ">
          <div className="max-w-xl mx-auto text-center flex flex-col justify-center items-center gap-10">
            <p className=" text-xl font-extrabold sm:text-5xl">
              Watch Our Barbershop Promo Video
            </p>
            <a href="#">
              <div className="border-2 hover:scale-90 hover:text-[#625c56] transition-all duration-300 border-white hover:border-[#625c56] rounded-full w-24 h-24 flex items-center justify-center p-2">
                <CiPlay1 className="text-4xl" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
