import React from "react";
import hero from "../../../assets/2147737069.jpg";

export default function TopHero() {
  return (
    <>
      <section className="relative w-full overflow-hidden h-[100vh]">
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${hero})`,
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/80 dark:to-gray-950/90"
          style={{ transition: "opacity 0.5s ease-out", willChange: "opacity" }}
        />
        <div className="relative z-10 container flex min-h-[50vh] flex-col items-center justify-center gap-6 py-12 md:min-h-[60vh] md:py-24 lg:min-h-[70vh] lg:py-32 mt-36 md:mt-20 mx-auto">
          <div className="space-y-6 text-center text-white leading-8">
            <p>STAY SHARP, LOOK GOOD</p>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl max-w-[600px] xl:max-w-[900px] mx-auto">
              NYC'S FAVOURITE BARBER SHOP
            </h1>
            <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-sm/relaxed dark:text-gray-400 font-bold">
              BROADWAY ST, NYC. APPOINTMENT: 855 100 4444
            </p>
            <div className="">
              <button className="px-12 py-3 bg-white hover:bg-[#91765a] text-black hover:text-white transition-colors delay-100 rounded-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
