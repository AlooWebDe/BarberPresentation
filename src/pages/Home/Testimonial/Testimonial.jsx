import React from "react";
import hero from "../../../assets/20953.jpg";
import { FaStar } from "react-icons/fa6";

export default function Testimonial() {
  return (
    <>
      <section
        className="py-36 relative bg-cover bg-fixed bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-950/80 dark:to-gray-950/90"
          style={{ transition: "opacity 0.5s ease-out", willChange: "opacity" }}
        />
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 relative z-10 ">
          <div className="max-w-3xl mx-auto text-center">
            <figure>
              <div className="flex justify-center gap-1">
                <FaStar className="text-yellow-500 text-2xl" />
                <FaStar className="text-yellow-500 text-2xl" />
                <FaStar className="text-yellow-500 text-2xl" />
                <FaStar className="text-yellow-500 text-2xl" />
                <FaStar className="text-yellow-500 text-2xl" />
              </div>
              <blockquote>
                <p className=" text-xl font-semibold sm:text-2xl">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  et est hendrerit, porta nunc vitae, gravida justo. Nunc
                  fermentum magna lorem, euismod volutpat arcu volutpat et.“
                </p>
              </blockquote>
              <div className="mt-6">
                <img
                  src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                  className="w-16 h-16 mx-auto rounded-full"
                  alt="avatar"
                />
                <div className="mt-3">
                  <span className="block  font-semibold">Martin escobar</span>
                  <span className="block  text-sm mt-0.5">Founder of meta</span>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
