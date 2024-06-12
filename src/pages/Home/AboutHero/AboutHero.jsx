import React from "react";
import pic1 from "../../../assets/20953.jpg";
import signature from "../../../assets/signature.svg";
export default function AboutHero() {
  return (
    <>
      <section className="py-14 bg-[#14100c] px-8 md:px-0">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="items-center gap-10 sm:px-4 md:px-0 md:flex justify-center">
            <img
              src={pic1}
              className="md:max-w-[350px] md:max-h-[400px] lg:max-w-[500px] lg:max-h-[550px] sm:rounded-sm shadow-md"
              alt="barber"
            />

            <div className="max-w-xl md:max-w-md space-y-3 mt-6 sm:px-0 lg:max-w-xl">
              <h3 className="text-[#625c56] font-bold">
                17 YEAR OF EXPERIENCE
              </h3>
              <p className="text-white text-3xl font-bold sm:text-5xl">
                Making people look awesome since 2006
              </p>
              <p className="mt-3 text-[#aba59f]">
                Come experience a unique and edgy barbershop for all your hair
                and beard needs. Vulputate ons amet ravida haretra nuam the
                drana miss uctus enec accumsan justo aliquam sit amet auctor
                orci done vitae risus duise nunc sapien.
              </p>
              <div className="flex items-center gap-5">
                <div>
                  <img className="w-16 h-16" src={signature} alt="signature" />
                </div>
                <div>
                  <p className="text-white">Barber, Founder</p>
                  <p className="text-[#625c56]">Harold Brown</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
