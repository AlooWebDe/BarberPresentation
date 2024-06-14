import React from "react";
import pic1 from "../../../assets/20953.jpg";
import pic2 from "../../../assets/20978.jpg";
import pic3 from "../../../assets/2147737069.jpg";
import pic4 from "../../../assets/2149141757.jpg";
import pic5 from "../../../assets/20719.jpg";
import pic6 from "../../../assets/20953.jpg";

export default function Gallery() {
  return (
    <>
      <section className="">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font lg:w-1/3 lg:mb-0 mb-4">
              GALLERY
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven&apos;t heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
            <div className="">
              <img
                alt="gallery"
                className="w-full object-cover h-[300px] object-center block"
                src={pic1}
              />
            </div>
            <div className="">
              <img
                alt="gallery"
                className="w-full object-cover h-[300px] object-center block"
                src={pic2}
              />
            </div>
            <div className="md:col-span-2 lg:col-auto">
              <img
                alt="gallery"
                className="w-full h-[300px] object-cover object-center block"
                src={pic3}
              />
            </div>

            <div className="lg:col-span-2">
              <img
                alt="gallery"
                className="w-full h-[300px] object-cover object-center block"
                src={pic4}
              />
            </div>
            <div className="">
              <img
                alt="gallery"
                className="w-full object-cover h-[300px] object-center block"
                src={pic5}
              />
            </div>
            <div className="md:col-span-2 lg:col-auto">
              <img
                alt="gallery"
                className="w-full object-cover h-[300px] object-center block"
                src={pic6}
              />
            </div>
            <div className="md:hidden lg:block lg:col-span-2">
              <img
                alt="gallery"
                className="w-full object-cover h-[300px] object-center block"
                src={pic4}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
